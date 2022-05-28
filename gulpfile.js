/// <binding BeforeBuild='default' ProjectOpened='default' />
const gulp = require('gulp');

const nodeModules = './node_modules';
const libPath = './src/lib';

gulp.task('default', async function () {

    //bootstrap
    gulp.src(nodeModules + "/bootstrap/dist/**/*").pipe(gulp.dest(libPath + "/bootstrap/"));

    //jquery
    gulp.src(nodeModules + "/jquery/dist/**/*").pipe(gulp.dest(libPath + "/jquery/"));

    //croppie
    gulp.src(nodeModules + "/croppie/**/*").pipe(gulp.dest(libPath + "/croppie/"));

});