// Dont use this file, although you can convert all your files to ES6 with babel
// and also watch for changes, app won't run  because there are some node_modules packages
// which were developed using ES7, so... unless you transpile all node_modules to ES6/ES5, the app won't run

// So better use node v7.6 or greater, those new versions already support ES7
// there is no need to use babel if your version is 7.6 or greater, so just skip this file

// Btw, jshint fails for ES7, so it is useless too... until that is fixed in another new version, the task is disabled here

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // jshint: {
    //   options: {
    //     jshintrc: '.jshintrc'
    //   },
    //   src: ['app/**/*.js', 'app_koa.js']
    // },
    babel: {
       options: {
          sourceMap: false,
          presets: ['es2015'],
          plugins: ['transform-async-to-generator']
       },
       dist: {
          files: [
           {
             src: ['app_koa.js'],
             dest: 'app.js'
           },
           {
             expand: true,
             cwd: 'app/',
             src: ['**/*.js'],
             dest: 'dist/'
           }
         ]
       }
   },
   watch: {
    babel: {
      files: ['app/**/*.js','app_koa.js'],
      tasks: ['babel'],
      options: {
        spawn: false
      },
    },
  }
  });

  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task(s).
  grunt.registerTask('dev', ['watch']);

};
