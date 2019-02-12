/**
 * Automation with Gulp
 */

	// Dependencies
var gulp = require( 'gulp' );
var scss = require( 'gulp-sass' );
var combine_mq = require( 'gulp-group-css-media-queries' );

// Variables
var SCSS_SRC = '__src/scss/**/*.scss';
var SCSS_DIST = 'assets/css';

// Tasks
gulp.task( 'build-scss', function () {

	return gulp
		.src( SCSS_SRC )
		.pipe( scss() )
		.pipe( combine_mq() )
		.pipe( gulp.dest( SCSS_DIST ) );

} );