/*!
 * Agile - Image Optimizer
 * http://github.com/renansan/agile-image-optmizr/
 * @author Renan San
 */

'use strict';

module.exports = function(grunt) {

  // Grunt config
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    /**
     * Project info
     */
    project: {
      src: 'src', // <%= project.src %>
      dist: 'dist' // <%= project.dist %>
    },

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
          cwd: '<%= project.src %>',
          src: ['{,**/}*.{png,jpg,gif}'],
          dest: '<%= project.dist %>'
        }]
      }
    },

  /**
   * Images task
   * Run 'grunt' on the command line
   * Compress images (just when files has changes)
   */
  grunt.loadNpmTasks('newer');
  grunt.loadNpmTasks('imagemin');
  grunt.registerTask('default', ['newer:imagemin']);

};