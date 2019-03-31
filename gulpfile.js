process.env.DISABLE_NOTIFIER = true;

const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');


gulp.task('default', function () {
    return gulp.src([
        'app/constants.js',
        'app/auth.js'
    ])
        .pipe(concat('reniec_idaas.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});