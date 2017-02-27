const gulp = require('gulp');
const babel = require('gulp-babel');
const rename = require('gulp-rename')
const watch = require('gulp-watch')
const connect = require('gulp-connect');
const stylus = require('gulp-stylus')
const uglify = require('gulp-uglify')
const mincss = require('gulp-minify-css')
const concat = require('gulp-concat')
const autoprefixer = require('gulp-autoprefixer');

gulp.task('connect', function() {
 connect.server({
    livereload: true,
    port: 8888
  });
});


// gulp.task('css',function(){
//     return gulp.src('./src//stylus/style.styl')
//                .pipe(stylus())
//                .pipe(gulp.dest('./dist/'))
// })

// gulp.task('js',function(){
//     return gulp.src('./src/js/main.js')
//                .pipe(gulp.dest('./dist/'))
// })

gulp.task('watchJS',function(){
	return watch('./src/js/*.js',function(){
		gulp.src('./src/js/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(uglify())
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./dist/'))
        .pipe(connect.reload())
	})
})

gulp.task('watchCSS',function(){
  return watch('src/stylus/*.styl',function(){
    gulp.src('src/stylus/*.styl')
        .pipe(stylus())
        .pipe(autoprefixer({
            browsers: ['last 20 versions'],
            cascade: false
        }))
        .pipe(mincss())
        .pipe(gulp.dest('./dist/'))
        .pipe(connect.reload())
  })
})

gulp.task('watchHTML',function(){
  return watch('./fmPlayer.html',function(){
    gulp.src('./fmPlayer.html')
        .pipe(connect.reload())
  })
})

gulp.task('default',['connect','watchJS','watchCSS','watchHTML']);