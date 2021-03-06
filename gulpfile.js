let tmplFolder = 'tmpl'; //template folder
let srcFolder = 'src'; //source folder
let buildFolder = 'build';

let gulp = require('gulp');
let watch = require('gulp-watch');
let del = require('del');
let fs = require('fs');
let ts = require('typescript');
let combineTool = require('../magix-composer/index');

combineTool.config({
    debug: true,
    commonFolder: tmplFolder,
    compiledFolder: srcFolder,
    projectName: 'fe',
    loaderType: 'module',
    galleries: {
        mxRoot: 'gallery/'
    },
    scopedCss: [
        './tmpl/assets/index.less'
    ],
    compileJSStart(content) {
        var str = ts.transpileModule(content, {
            compilerOptions: {
                lib: ['es2017'],
                target: 'es2017',
                module: ts.ModuleKind.ESNext
            }
        });
        str = str.outputText;
        return str;
    },
    resolveRequire(m) {
        if (m.mId == 'magix5') {
            m.mId = 'https://xinglie.github.io/build/lib/magix.js';
        }
        //console.log(e);
    }
});

gulp.task('cleanSrc', () => del(srcFolder));

gulp.task('combine', gulp.series('cleanSrc', () => {
    return combineTool.combine().then(() => {
        console.log('complete');
    }).catch(function (ex) {
        console.log('gulpfile:', ex);
        process.exit();
    });
}));

gulp.task('watch', gulp.series('combine', () => {
    watch(tmplFolder + '/**/*', e => {
        if (fs.existsSync(e.path)) {
            var c = combineTool.processFile(e.path);
            c.catch(function (ex) {
                console.log('ex', ex);
            });
        } else {
            combineTool.removeFile(e.path);
        }
    });
}));

let langReg = /@\{lang#[\S\s]+?\}/g;
gulp.task('lang-check', () => {
    let c = combineTool.readFile('./tmpl/i18n/zh-cn.ts');
    let lMap = {}, missed = {};
    c.replace(langReg, m => {
        lMap[m] = 0;
    });
    combineTool.walk('./tmpl', f => {
        if (!f.includes('/lib/') &&
            !f.includes('/i18n/')) {
            let c = combineTool.readFile(f);
            c.replace(langReg, m => {
                if (lMap.hasOwnProperty(m)) {
                    lMap[m]++;
                } else {
                    missed[m] = 'missed';
                }
            });
        }
    });
    console.table(lMap);
    console.table(missed);
});

let htmlIconReg = /(&#x)([0-9a-f]{4})/g;
let cssIconReg = /(['"])\\([0-9a-f]{4})\1/g;
let path = require('path');
let https = require('https');
gulp.task('icons-check', () => {
    let exts = {
        css: 1,
        less: 1,
        html: 1,
        js: 1,
        ts: 1,
        mx: 1
    };
    let icons = {};
    combineTool.walk('./tmpl', function (file) {
        let ext = path.extname(file);
        if (exts[ext.substring(1)]) {
            let reg;
            if (ext == '.css' ||
                ext == '.less') {
                reg = cssIconReg;
            } else {
                reg = htmlIconReg;
            }
            let c = combineTool.readFile(file);
            c.replace(reg, function (match, ignore, hex) {
                icons[hex] = 1;
            });
        }
    });
    https.get('https://www.iconfont.cn/open/project/detail.json?pid=890516', res => {
        let raw = '',
            unused = {};
        res.on('data', d => {
            raw += d;
        });
        res.on('end', () => {
            let json = JSON.parse(raw);
            for (let i of json.data.icons) {
                let n = parseInt(i.unicode).toString(16);
                if (!icons.hasOwnProperty(n)) {
                    unused[n] = 'unused';
                }
            }
            console.table(unused);
        });
    });
});

var terser = require('gulp-terser-scoped');
gulp.task('cleanBuild', () => {
    return del(buildFolder);
});

gulp.task('build', gulp.series('cleanBuild', 'cleanSrc', () => {
    combineTool.config({
        debug: false
    });
    combineTool.combine().then(() => {
        gulp.src(srcFolder + '/**/*.js')
            .pipe(terser({
                module: true,
                compress: {
                    drop_console: true,
                    drop_debugger: true,
                    global_defs: {
                        DEBUG: false
                    }
                },
                output: {
                    ascii_only: true,
                    comments: /^!/
                }
            }))
            .pipe(gulp.dest(buildFolder));
    }).catch(ex => {
        console.error(ex);
    });
}));