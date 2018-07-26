/**
 * Automation with Gulp
 */

// Dependencies
var gulp = require( 'gulp' );
var scss = require( 'gulp-sass' );
var less = require( 'gulp-less' );
var concat = require( 'gulp-concat' );
var minifyCSS = require( 'gulp-clean-css' );

// Variables
var SCSS_SRC = '__src/scss/**/*.scss';
var SCSS_DIST = 'assets/css';
var LESS_SRC = '__src/less/**/*.less';
var LESS_DIST = 'assets/css';

// Tasks
gulp.task( 'build-scss', function() {

  return gulp
          .src( SCSS_SRC )
          .pipe( scss( {
            outputStyle: 'compressed'
          } ) )
          .pipe( concat( 'styles.min.css' ) )
          .pipe( gulp.dest( SCSS_DIST ) );

} );

gulp.task( 'build-less', function() {

  return gulp
          .src( LESS_SRC )
          .pipe( less() )
          .pipe( minifyCSS() )
          .pipe( concat( 'styles.min.css' ) )
          .pipe( gulp.dest( LESS_DIST ) );

} );
