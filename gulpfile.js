/**
 * Automation with Gulp
 */

// Dependencies
var gulp = require( 'gulp' );
var inject = require( 'gulp-inject' );

// Variables
var CSS_SRC = [ 'assets/css/vendor/*.css', 'assets/css/*.css' ];
var JS_SRC = [ 'assets/js/vendor/*.js', 'assets/js/*.js' ];
var HTML_FILES = '*.html';

// Tasks
gulp.task( 'inject-assets', function () {

	return gulp
		.src( HTML_FILES )
		.pipe( inject( gulp.src( CSS_SRC, { read: false } ) ) )
		.pipe( inject( gulp.src( JS_SRC, { read: false } ) ) )
		.pipe( gulp.dest( './' ) );

} );
