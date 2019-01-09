/**
 * Automation with Gulp
 */

	// Dependencies
var gulp = require( 'gulp' );
var minifyCSS = require( 'gulp-clean-css' );
var concat = require( 'gulp-concat' );
var spritesmith = require( 'gulp.spritesmith' );

// Variables
var CSS_SRC = [ '__src/css/vendor/*.css', '__src/css/*.css' ];
var CSS_DIST = 'assets/css';

var SPRITE_SRC = '__src/images/icons/*.png';
var SPRITE_DIST = 'assets/images/';

// Tasks
gulp.task( 'minify-css', function () {

	return gulp
		.src( CSS_SRC )
		.pipe( minifyCSS() )
		.pipe( concat( 'styles.min.css' ) )
		.pipe( gulp.dest( CSS_DIST ) );

} );

gulp.task( 'gen-sprite', function () {

	var _data = gulp.src( SPRITE_SRC )
	                .pipe( spritesmith( {
		                imgName : '../images/icons-sprite.png',
		                cssName : 'icons-sprite.css'
	                } ) );

	_data.img.pipe( gulp.dest( SPRITE_DIST ) );
	return _data.css.pipe( gulp.dest( CSS_DIST ) );

} );