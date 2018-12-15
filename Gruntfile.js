module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      eslint: {
        options: {
            configFile: 'conf/eslint.json',
            rulePaths: ['conf/rules']
        },
        target: ['./src/toyrobo.js']
    },
      uglify: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
        build: {
          src: ['index.js', 'src/<%= pkg.name %>.js'],
          dest: 'build/<%= pkg.name %>.min.js'
        }
      }
    });
  
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-eslint');
  
    // Default task(s).
    grunt.registerTask('build', ['eslint','uglify']);
  
  };