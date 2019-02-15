var gulp = require('gulp');
// var concat = require('gulp-concat');
// var rename = require('gulp-rename');
// var uglify = require('gulp-uglify');
// var less = require('gulp-less');
// var cleanCss = require('gulp-clean-css');
// var html = require('gulp-htmlmin');
// var livereload = require('gulp-livereload')
// var connect = require('gulp-connect')
var $ = require('gulp-load-plugins')();
var open = require('open');
console.log($)

gulp.task('js', function (params) {
  return gulp.src('src/**/*.js')
    .pipe($.concat('build.js'))
    .pipe(gulp.dest('dist/js/'))
    .pipe($.rev())
    .pipe($.uglify())
    .pipe($.rename({suffix: '.min'}))
    .pipe($.rev.manifest())
    .pipe(gulp.dest('dist/js/'))
    .pipe($.livereload())
    .pipe($.connect.reload())
})

gulp.task('rev', function () {
  return gulp.src(['rev/**/*.json', 'templates/**/*.html'])
    .pipe(revCollector({
      replaceReved: true,
      dirReplacements: {
        'css': '/dist/css',
        '/js/': '/dist/js/',
        'cdn/': function (manifest_value) {
          return '//cdn' + (Math.floor(Math.random() * 9) + 1) + '.' + 'exsample.dot' + '/img/' + manifest_value;
        }
      }
    }))
    .pipe(minifyHTML({
      empty: true,
      spare: true
    }))
    .pipe(gulp.dest('dist'));
});
gulp.task('less', function (done) {
  return gulp.src('src/less/*.less')
    .pipe($.less())
    .pipe(gulp.dest('src/css/'))
    .pipe($.livereload())
    .pipe($.connect.reload())
})


gulp.task('css', function () {
  return gulp.src('src/css/*.css')
    .pipe($.concat('build.css'))
  .pipe(gulp.dest('dist/css/'))
    .pipe($.rename({suffix: '.min'}))
    .pipe($.cleanCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css/'))
    .pipe($.livereload())
    .pipe($.connect.reload())
})

gulp.task('html', function name(params) {
  return gulp.src('index.html')
    .pipe($.htmlmin({collapseWhitespace: true}))
  .pipe(gulp.dest('dist/'))
    .pipe($.livereload())
    .pipe($.connect.reload())
})

// gulp.task('default', function () {
//   // 将你的默认的任务代码放在这
// });
// gulp.task('default', ['js', 'less', 'css'], function name(params) {
//   params()
// });

gulp.task('watch', ['default'], function name(params) {
  livereload.listen();
  gulp.watch('src/js/*.js', ['js'])
  gulp.watch(['src/less/*.less', 'src/css/*.css'], ['css'])
})

gulp.task('server', ['default'], function () {
  $.connect.server({
    root: 'dist/',
    livereload: true,
    port: 8888
  })
  gulp.watch('src/js/*.js', ['js'])
  gulp.watch(['src/less/*.less', 'src/css/*.css'], ['css'])
  // window.open('http://localhost:8888/"')
  open("http://localhost:8888/")
})
gulp.task('default', ['js', 'less', 'css', 'html']);
