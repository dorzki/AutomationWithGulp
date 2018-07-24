/**
 * Automation with Gulp
 */

// Dependencies
var gulp = require( 'gulp' );
var minifyCSS = require( 'gulp-clean-css' );
var concat = require( 'gulp-concat' );

// Variables
var CSS_SRC = '__src/css/*.css';
var CSS_DIST = 'assets/css';

// Tasks
gulp.task( 'minify-css', function() {

  return gulp
          .src( CSS_SRC )
          .pipe( minifyCSS() )
          .pipe( concat( 'styles.min.css' ) )
          .pipe( gulp.dest( CSS_DIST ) );

} );
