var gulp        = require('gulp'),
    minifyJS    = require('gulp-uglify'),
    minifyHTML  = require('gulp-html-minify'),
    replace     = require('gulp-replace');

var _path       = {
    base: '/angular-lazy-module/module2/',
    baseDist: '/angular-lazy-module/dist/',
    fontsJs: 'module2/**/*.js',
    htmlFonts: 'module2/**/*.html',
    exportFolder: 'dist/'
};

gulp.task('minifyJS', function() {
    return gulp.src(_path.fontsJs)
        .pipe(minifyJS())
        .pipe(replace(_path.base, _path.baseDist))
        .pipe(gulp.dest(_path.exportFolder));
});

gulp.task('minifyHTML', function() {
    return gulp.src(_path.htmlFonts)
        .pipe(minifyHTML())
        .pipe(gulp.dest(_path.exportFolder));
});


gulp.task('build', ['minifyHTML', 'minifyJS']);
