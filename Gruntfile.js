/*
 Run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

  grunt.initConfig({
    // responsive_images: {
    //   dev: {
    //     files: [{
    //       expand: true,
    //       cwd: 'views/images/',            //Removed 'images_src/'
    //       src: ['**/*.{gif,jpg,png}'],
    //       dest: 'dist/images/'
    //     }]
    //   }
    // }
    imagemin: {
      dev: {
        files: [{
          expand: true,                  // Enable dynamic expansion
          cwd: 'views/images/',           //Removed 'images_src' to minify images in Cam's pizza
          src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
          dest: 'dist/images/'                  // Destination path prefix
        }]
      }
    },
    uglify: {
      build: {
          src: 'js/perfmatters.js',
          dest: 'dist/js/perfmatters.min.js'
      }
    }
  });

  // grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.registerTask('default', ['imagemin', 'uglify']);     //Removed 'responsive_images',
  grunt.loadNpmTasks('grunt-contrib-uglify');

};
