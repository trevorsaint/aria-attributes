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
      
      
      copy: {
        
        govuk: {
          
          files: [
            
            {
              expand: true,
              cwd: 'node_modules/govuk_template_mustache/assets/stylesheets',
              src: '**',
              dest: 'public/govuk/stylesheets/'
            },
            
            {
              expand: true,
              cwd: 'node_modules/govuk_template_mustache/assets/images',
              src: '**',
              dest: 'public/govuk/images/'
            },
            
            {
              expand: true,
              cwd: 'node_modules/govuk_frontend_toolkit/images',
              src: '**',
              dest: 'public/govuk/images'
            },
            
            {
              expand: true,
              cwd: 'node_modules/govuk_frontend_toolkit/stylesheets',
              src: '**',
              dest: 'public/govuk/sass'
            },
            
            {
              expand: true,
              cwd: 'node_modules/govuk-elements-sass/public/sass',
              src: '**',
              dest: 'public/govuk/sass'
            }
            
          ]
          
        }
        
      },
      
      
      sass: {

        dist: {

          options: {
            noCache: true,
            style: 'expanded',
            sourcemap: 'none'
          },
          
          files: {
            'public/styles/main.css' : 'public/sass/main.scss', 
          }

        }

      },


      watch: {

        options: {
          livereload: true,
          spawn: false
        },
  
        express: {
          files: ['app.js', 'Gruntfile.js', 'routes/*.js'],
          tasks: ['express:dev']
        },
        
        sass: {
          files: ['public/sass/**/*.scss'],
          tasks: ['sass']
        }
        
      }


  });


  [
    'grunt-express-server', 
    'grunt-contrib-copy',
    'grunt-contrib-sass', 
    'grunt-contrib-watch'
  ].forEach(function (task) {
    grunt.loadNpmTasks(task);
  });


  grunt.registerTask('default', [
    'express:dev', 
    'copy:govuk',
    'sass', 
    'watch'
  ]);


};