module.exports = function(grunt) {
 
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      
      // WATCH THE SASS FILES FOR CHNAGES AND COMPILE WITH COMPASS
      sass: {
        files: ['styles/sass/**/*.scss'],
        tasks: ['sass', 'autoprefixer'],
        options: {
          spawn: false,
        }
      },
      html: {
        files: ['**/*.html', '**/*.css'],
      },
      js: {
        files: ['javascript/**/*.js'],
        tasks: ['jshint']
      },
      options: {
        livereload: true,
      },
    },

    jshint: {
      dev: [
        'javascript/app.js', 
        'javascript/collections/*.js', 
        'javascript/models/*.js', 
        'javascript/routers/*.js',
        'javascript/views/*.js'
      ]
    },

    autoprefixer: {
      options: {
        browsers: ['last 2 version', 'ie 8']
      },
      dev: {
        src: 'styles/css/main.css'
      }
    },

    sass: {
      dev: {
        files: { 'styles/css/main.css': 'styles/sass/main.scss' }
      }
    },

    connect: {
      server: {
        options: {
          port: 1234
        }
      }
    },
    
  });
  
  // INCLUDE ALL THE GRUNT TASKS
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-usemin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-ftp-deploy');

  // Default task.
  grunt.registerTask('default', [
    'sass:dev',
    'autoprefixer',
    'connect:server',
    'watch'
  ]);
 
};