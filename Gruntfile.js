/*
 Run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images_src/',
          dest: 'dist/images/'
        }]
      }
    },
    imagemin: {
      dev: {
        files: [{
          expand: true,                  // Enable dynamic expansion
          cwd: 'views/images/',           //Removed 'images_src' to minify images in Cam's pizza
          src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
          dest: 'dist/images/'                  // Destination path prefix
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.registerTask('default', 'responsive_images', ['imagemin']);

};
