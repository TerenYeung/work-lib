var gulp = require('gulp'),
	minhtml = require('gulp-htmlmin'),
	less = require('gulp-less'),
	mincss = require('gulp-minify-css'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	rename = require('gulp-rename'),
	autoprefixer = require('gulp-autoprefixer');

gulp.task('html',function(){
	return gulp.src('src/*.html')
			   .pipe(minhtml({collapseWhitespace: true}))
			   .pipe(rename({
			   		suffix:'.min'
			   }))
			   .pipe(gulp.dest('./dist'))
});	


gulp.task('css',function(){
	return gulp.src('src/less/*.less')
			   .pipe(less('.css'))
			   .pipe(autoprefixer({
			   		browsers: ['last 10 versions'],
			   		cascade: false
			   }))
			   .pipe(concat('style.css'))
			   .pipe(rename({
			   		suffix:'.min'
			   }))
			   .pipe(mincss())
			   .pipe(gulp.dest('./dist/css/'));
});

gulp.task('js',function(){
	return gulp.src('src/js/*.js')
			   .pipe(concat('main.js'))
			   .pipe(uglify())
			   .pipe(rename({
			   		suffix:'.min'
			   }))
			   .pipe(gulp.dest('dist/js/'));
});

gulp.task('build',['html','css','js'])

