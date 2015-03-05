module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass'],
        options : {
          spawn : false,
        }
      }
    },


    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss']
      },
      dist: {
        options: {
          outputStyle: 'expanded'
        },
        files: {
          'css/app.css': 'scss/app.scss'
        }
      }
    },

    browserSync : {
      dev : {
        bsFiles : {
          src : ['css/*.css', 'images/*.*', 'js/*.js', '*.html']
        },
        options : {
          server : {
            baseDir : "./"

          },
          watchTask : true // < VERY important
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');

//  grunt.registerTask('build', ['sass']);
  //grunt.registerTask('default', ['build','watch']);
  grunt.registerTask('default', ["browserSync", "watch"]);
}
