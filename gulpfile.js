var gulp	= require('gulp'),
	less	= require('gulp-less'),
	concat	= require('gulp-concat'),
	replace	= require('gulp-replace'),
	cssmin	= require('gulp-cssmin')
	pkg		= require('./package.json');

function compile(minify) {
	return function () {
		var stream = gulp.src('less/gridup.less');

		stream = stream
			.pipe(concat(minify ? 'gridup.min.css' : 'gridup.css'))
			.pipe(less());

		if (minify) {
			stream = stream.pipe(cssmin({
				compress: true
			}));
		}

		return stream
			.pipe(gulp.dest('dist/'));
	};
}

gulp.task('compile:min', ['config.less', 'gridup.less'], compile(true));
gulp.task('compile:max', ['config.less', 'gridup.less'], compile(false));
gulp.task('compile', ['compile:min', 'compile:max']);

gulp.task('config.less', function () {
	return gulp.src('gulp/config.less.tpl')
		.pipe(replace('{{prefixFirst}}', process.env.PREFIX_FIRST || 'false'))
		.pipe(replace('{{breakpoints}}', process.env.BREAKPOINTS || 'xs 0, sm 48em, md 62em, lg 75em'))
		.pipe(replace('{{columns}}', process.env.COLUMNS || '12'))
		.pipe(replace('{{gutter}}', process.env.GUTTER || '3.2%'))
		.pipe(replace('{{enableOffsets}}', process.env.ENABLE_OFFSETS || 'true'))
		.pipe(replace('{{enablePull}}', process.env.ENABLE_PULL || 'true'))
		.pipe(replace('{{enablePush}}', process.env.ENABLE_PUSH || 'true'))
		.pipe(replace('{{enableTextAlign}}', process.env.ENABLE_TEXT_ALIGN || 'true'))
		.pipe(replace('{{enableFloats}}', process.env.ENABLE_FLOATS || 'true'))
		.pipe(replace('{{enableDisplay}}', process.env.ENABLE_DISPLAY || 'true'))
		.pipe(replace('{{enableAdvancedDisplay}}', process.env.ENABLE_ADVANCED_DISPLAY || 'true'))
		.pipe(replace('{{enableVisibility}}', process.env.ENABLE_VISIBILITY || 'true'))
		.pipe(concat('config.less'))
		.pipe(gulp.dest('less/'));
});

gulp.task('gridup.less', function () {
	return gulp.src('gulp/gridup.less.tpl')
		.pipe(replace('{{version}}', pkg.version))
		.pipe(concat('gridup.less'))
		.pipe(gulp.dest('less/'));
});
