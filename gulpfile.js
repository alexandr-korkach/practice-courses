var gulp = require('gulp'),
		concatCss = require('gulp-concat-css'),
		cssmin = require('gulp-cssmin'),
    stylus = require('gulp-stylus'),
    autoprefixer = require('gulp-autoprefixer'),
		rename = require('gulp-rename'),
		imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
		prettify = require('gulp-html-prettify'),
		jade = require('gulp-jade'),
		watch = require('gulp-watch'),
		uglify = require('gulp-uglify');


gulp.task('image', function () {
  return gulp.src('public/images/*')
	    .pipe(imagemin({
	        progressive: true,
	        svgoPlugins: [{removeViewBox: false}],
	        use: [pngquant()]
	    }))
	    .pipe(gulp.dest('./build/images/'));
});


gulp.task('js', function () {
		    return gulp.src('./public/js/*.js')
		        .pipe(uglify())
		        .pipe(gulp.dest('./build/script/'));
		});

gulp.task('styl', function() {
		    return gulp.src('./public/styl/*.styl')
		        .pipe(stylus({
		            linenos: false
		        }))
		        .pipe(autoprefixer([
		            'Android 2.3',
		            'Android >= 4',
		            'Chrome >= 20',
		            'Firefox >= 19',
		            'Explorer >= 8',
		            'iOS >= 6',
		            'Opera >= 12',
		            'Safari >= 6'
		        ]))
		        .pipe(concatCss('styl.css'))
		        .pipe(gulp.dest('./public/css/'));

		});


gulp.task('css', function () {
		  return gulp.src('./public/css/*.css')
		    .pipe(concatCss("style.css"))
		    .pipe(cssmin())
		    .pipe(rename({suffix: '.min'}))
		    .pipe(gulp.dest('./build/style'));
		});

gulp.task('jade', function() {
	  var YOUR_LOCALS = {};

	  return gulp.src('./public/jade/*.jade')
		    .pipe(jade({
		        locals: YOUR_LOCALS
		    }))
		    .pipe(prettify({indent_char: ' ', indent_size: 3}))
		    .pipe(gulp.dest('./build/'))
})

		gulp.task('watch', function() {
		    gulp.watch("./public/styl/*.styl", ['styl']);
		    gulp.watch("./public/css/*.css", ['css']);
		    gulp.watch("./public/js/*.js", ['js']);
		});
