grunt.loadNpmTasks('grunt-responsive-images');

export default function (grunt) {
  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          sizes: [{
            name: 'x-small',
            width: 200,
            suffix: "-200",
            quality: 85
          }, {
            name: 'small',
            width: 400,
            suffix: "-400",
            quality: 85
          }, {
            name: 'med',
            width: 600,
            suffix: "-600",
            quality: 85
          }, {
            name: "large",
            width: 800,
            suffix: "-800",
            quality: 85
          }, {
            name: "x-large",
            width: 1100,
            quality: 85
          }]
        },
        files: [{
          expand: true,
          src: ['*.{jpg,gif,png}'],
          cwd: 'src/assets/images/design/',
          dest: 'src/assets/images/design-RAW/'
        }, {
          expand: true,
          src: ['*.{jpg,gif,png}'],
          cwd: 'src/assets/images/illustration/',
          dest: 'src/assets/images/illustration-RAW/'
        }, {
          expand: true,
          src: ['*.{jpg,gif,png}'],
          cwd: 'src/assets/images/webdev/',
          dest: 'src/assets/images/webdev-RAW/'
        }]
      }
    },
    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['src/assets/images/design/', 'src/assets/images/illustration/', 'src/assets/images/webdev/']
      },
    },
    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['src/assets/images/design/', 'src/assets/images/illustration/', 'src/assets/images/webdev/']
        },
      },
    },
    /* Copy the "fixed" images that don't go through processing into the images/directory */
    copy: {
      dev: {
        files: [{
          expand: true,
          src: ['src/assets/images/design/*.{gif,jpg,png}', 'src/assets/images/illustration/*.{gif,jpg,png}', 'src/assets/images/webdev/*.{gif,jpg,png}'],
          dest: ['src/assets/images/design/', 'src/assets/images/illustration/', 'src/assets/images/webdev/']
        }]
      },
    },
  });
  
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean', 'mkdir', 'copy', 'responsive_images']);
};