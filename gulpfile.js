var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', async function () {
  gulp.src('./scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./scss/*.scss', gulp.series('sass'));
});

 gulp.task('browser-sync', function () {
   browserSync.init(["./css/*.css", "./*.html"], {
     server: {
       baseDir: ".",
       index: "index.html"
     }
     //proxy: "test.loc"    , "./**/*.twig"
   })
 });

gulp.task('watch', gulp.series('sass', gulp.parallel('sass:watch', "browser-sync")));
gulp.task('default', gulp.series('watch'));
