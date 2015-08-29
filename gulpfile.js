var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('copy-packagefiles', function(){
  return gulp.src(['bower.json'])
    .pipe(gulp.dest('dist'));
});

gulp.task('scripts', function(){
  return gulp.src(['src/ngSweetsModule.js', 'src/**/*.js'])
  .pipe(concat('ngsweets.js'))
  .pipe(uglify())
  .pipe(gulp.dest('dist'));
});

gulp.task('build', ['scripts', 'copy-packagefiles']);

gulp.task('watch', function(){
  gulp.watch('src/**/*.js', ['build']);
});

gulp.task('default', ['build', 'watch']);
