const gulp = require('gulp');
const concat = require('gulp-concat');
const del = require('del');
const sass = require('gulp-sass');
const autoprefix = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const include = require('gulp-include')

gulp.task('css', function() {
    return gulp.src('scss/*.scss')
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(concat('style.css'))
        .pipe(autoprefix())
        .pipe(gulp.dest('css/'))
        .pipe(browserSync.stream());
});

const config = {
    watch: true,
    server: {
        baseDir: "./"
    },
    tunnel: false,
    host: 'localhost',
    port: 3000
};
gulp.task('watch', function() {
    browserSync.init(config);
    gulp.watch('scss/*.scss', gulp.series('css'));
    gulp.watch('*.html');
});
gulp.task('clearBuild', function() {
    return del(['css/*'])
});
gulp.task('build',
    gulp.series( 'clearBuild', gulp.parallel('css' ))
);

gulp.task('build-js', function(){
    gulp.src('js/main.js')
        .pipe(include())
            .on('error', console.log)
        .pipe(gulp.dest("dist"));

    }
 
);


