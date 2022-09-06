
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('styles', () => {
    return gulp.src('wwwroot/scss/StyleSheet.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('wwwroot/css'));
}
gulp.task('default',gulp.series(['styles'])));

