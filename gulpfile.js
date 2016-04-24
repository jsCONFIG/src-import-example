var gulp = require('gulp');
var srcImport = require('src-import');
var conf = require('./config.json');

var taskConf = conf.task;

gulp.task('normal', function () {
    var imports = srcImport({
        basedir: 'example'
    });
    var myConf = taskConf.normal;
    gulp.src(myConf.src)
        .pipe(imports)
        .pipe(gulp.dest(myConf.dest));
});

gulp.task('default', ['normal']);