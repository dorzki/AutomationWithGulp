/**
 * Automation with Gulp
 */

	// Dependencies
var gulp = require( 'gulp' );
var uglify = require( 'gulp-uglify' );
var concat = require( 'gulp-concat' );
var sourcemaps = require( 'gulp-sourcemaps' );

// Variables
var JS_SRC = '__src/js/*.js';
var JS_VENDOR = '__src/js/vendor/*.js';
var JS_DIST = 'assets/js';

// Tasks
gulp.task( 'build-js', function () {

	return gulp
		.src( [ JS_VENDOR, JS_SRC ] )
		.pipe( sourcemaps.init() )
		.pipe( uglify() )
		.pipe( concat( 'scripts.min.js' ) )
		.pipe( sourcemaps.write( './' ) )
		.pipe( gulp.dest( JS_DIST ) );

} );
