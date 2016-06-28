'use strict';


var path = require('path');


module.exports = function (grunt) {


  grunt.initConfig({


      pkg: grunt.file.readJSON('package.json'),


      express: {

        dev: {

          options: {
            script: 'app.js',
            port: 3000
          }

        }

      },
      
      
      jade: {
       
        compile: {
          
          options: {
            data: {
              debug: false
            }
          },
          
          files: {
            "path/to/dest.html": ["views/*.jade"]
          }
          
        }
        
      },


      watch: {

        options: {
          livereload: true,
        },
  
        express: {

          files: ['app.js', 'Gruntfile.js', 'routes/*.js'],
          tasks: ['express:dev'],

          options: {
            livereload: true,
            spawn: false
          }

        },
        
        jade: {

          files: ['views/**/*.jade'],
          tasks: ['jade'],

          options: {
            livereload: true,
            spawn: false
          }

        }
        
      }


  });


  ['grunt-express-server',
   'grunt-contrib-jade',
   'grunt-contrib-watch'
  ].forEach(function (task) {
    grunt.loadNpmTasks(task);
  });


  grunt.registerTask('default', ['express:dev', 'jade', 'watch']);


};