/**
 * Automation with Gulp
 */

// Dependencies
var gulp = require( 'gulp' );
var scss = require( 'gulp-sass' );
var concat = require( 'gulp-concat' );
var uglify = require( 'gulp-uglify' );
var concat = require( 'gulp-concat' );
var sourcemaps = require( 'gulp-sourcemaps' );
let browsersync = require( 'browser-sync' ).create();

// Variables
var SCSS_SRC = '__src/scss/**/*.scss';
var SCSS_DIST = 'assets/css';
var JS_SRC = '__src/js/*.js';
var JS_VENDOR = '__src/js/vendor/*.js';
var JS_DIST = 'assets/js';

// Tasks
gulp.task( 'build-scss', function () {

	return gulp
		.src( SCSS_SRC )
		.pipe( scss( {
			outputStyle : 'compressed'
		} ) )
		.pipe( concat( 'styles.min.css' ) )
		.pipe( gulp.dest( SCSS_DIST ) );

} );

gulp.task( 'build-js', function () {

	return gulp
		.src( [ JS_VENDOR, JS_SRC ] )
		.pipe( sourcemaps.init() )
		.pipe( uglify() )
		.pipe( concat( 'scripts.min.js' ) )
		.pipe( sourcemaps.write( './' ) )
		.pipe( gulp.dest( JS_DIST ) );

} );

gulp.task( 'browser-sync', function () {

	browsersync.init( {
		proxy : 'http://localhost/project_dir/',
		port : 8888,
		injectChanges : true
	} );

	gulp.watch( [ '**/*.html', '**/*.php' ] ).on( 'change', browsersync.reload );
	gulp.watch( SCSS_SRC, [ 'build-scss' ] );
	gulp.watch( JS_SRC, [ 'build-js' ] );

} );
