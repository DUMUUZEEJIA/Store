var gulp = require('gulp');
var jade = require('gulp-jade');

gulp.task('jade', function () {
  gulp.src('*.jade')
    .pipe(jade({
      // locals: YOUR_LOCALS
      // client: true,
      pretty: true
    }))
    .pipe(gulp.dest('./dist/'))
});