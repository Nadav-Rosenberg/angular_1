module.exports = function(grunt) {
  pkg: grunt.file.readJSON('package.json'),
  grunt.initConfig({
    webdriver: {
      helloWorld: {
        tests: 'test/**/*'
      },
      options: {
        desiredCapabilities: {
          browserName: 'chrome'
      }
    },
  })

  grunt.loadNpmTasks('grunt-webdriver');

  grunt.registerTask('default', ['webdriver']);
};



// module.exports = function(grunt){
//   pkg: grunt.file.readJSON('package.json'),
//   grunt.initConfig({
//     jshint: {
//       all:['Gruntfile.js', 'src/**/*.js', 'spec/**/*.js']
//     },
//     webdriver: {
//       helloWorld: {
//         tests: 'test/**/*'
//       },
//       options: {
//         desiredCapabilities: {
//           browserName: 'chrome'
//       }
//     },
//   })

//   grunt.loadNpmTasks('grunt-contrib-watch');

//   grunt.loadNpmTasks('grunt-contrib-jshint');

//   grunt.loadNpmTasks('grunt-webdriver');

//   grunt.registerTask('default', ['jshint', 'watch', 'webdriver']);

//   grunt.registerTask('default', ['webdriver']);
// };
