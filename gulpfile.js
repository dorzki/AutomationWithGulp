/**
 * Automation with Gulp
 */

// Dependencies
var gulp = require( 'gulp' );
var svgSprite = require( 'gulp-svg-sprite' );

// Variables
var SVG_SRC = '__src/images/*.svg';
var SVG_DEST = 'assets/images';

var SVG_CSS_DEST = '../css/svg-sprite.css';
var SVG_SCSS_DEST = '../../__src/scss/_svg-sprite.scss';

// Tasks
gulp.task( 'gen-svg-sprite', function () {

	return gulp
		.src( SVG_SRC )
		.pipe( svgSprite( {
			mode : {
				defs : {
					bust : false,
					render : {
						css : {
							dest : SVG_CSS_DEST
						}
					},
					dest : SVG_DEST,
					sprite : 'icons-sprite.svg',
				}
			}
		} ) )
		.pipe( gulp.dest( '.' ) );

} );

gulp.task( 'gen-svg-sprite-scss', function () {

	return gulp
		.src( SVG_SRC )
		.pipe( svgSprite( {
			mode : {
				defs : {
					bust : false,
					render : {
						scss : {
							dest : SVG_SCSS_DEST
						}
					},
					dest : SVG_DEST,
					sprite : 'icons-sprite.svg',
				}
			}
		} ) )
		.pipe( gulp.dest( '.' ) );

} );
