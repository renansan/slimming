/*!
 * Slimming - Image Optimizer
 * http://github.com/renansan/slimming/
 * @author Renan San
 */

'use strict';

module.exports = function(grunt) {

  // Grunt config
  grunt.initConfig({
    
    /**
     * Image compress
     * https://github.com/gruntjs/grunt-contrib-imagemin
     * Compress images and copy to dist folder
     */
    imagemin: {
      all: {
        options: {
          optimizationLevel: 3,
          progressive: true
        },
        files: [{
          expand: true,
          cwd: 'src/',
          src: ['{,**/}*.{png,jpg,gif}'],
          dest: 'dist/'
        }]
      }
    }
  });

  /**
   * Images task
   * Run 'grunt' on the command line
   * Compress images
   */
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.registerTask('default', ['imagemin']);

};