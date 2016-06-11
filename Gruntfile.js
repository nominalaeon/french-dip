'use strict';

module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  var rootConfig = {

  };

  // Project configuration.
  grunt.initConfig({
    root: rootConfig,
    pkg: grunt.file.readJSON('package.json'),

    jsdoc : {
        dist : {
            src: [
              'french-dip.js'
            ],
            options: {
                destination: 'doc'
            }
        }
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'french-dip.js'
      ]
    },

    uglify: {
      my_target: {
        files: {
          'french-dip.min.js': ['french-dip.js']
        }
      }
    }
  });

  // Default task.
  grunt.registerTask('default', ['jshint', 'uglify']);

};