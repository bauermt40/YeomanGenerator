// Generated on <%= (new Date).toISOString().split('T')[0] %> using <%= pkg.name %> <%= pkg.version %>
/// <binding />
/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
*/
module.exports = function (grunt) {

    //configure plugins
    grunt.initConfig({
        
        useminPrepare: {
            html: 'src/Index.html',
            options: {
                dest: 'build'
            }
        },

        usemin: { html: ['build/Index.html'] },

        uglify: {
            build: {
                files: {
                    'build/js/app.min.js': ['src/js/**/*.js']
                }
            }
        },
        
        cssmin: {
            build: {
                files: {
                    'build/styles/site.min.css': ['src/styles/**/*.css']
                }
            }
        },

        copy: {
            build: {
                files: [
                    {
                        expand: true,
                        cwd: 'src',
                        src: [
                            'Index.html',
                            'views/**/*.html',
                            'lib/bootstrap/dist/css/bootstrap.min.css',
                            'lib/bootstrap/dist/fonts/**',
                            'lib/bootstrap/dist/js/bootstrap.min.js',
                            'lib/angular/angular.min.js',
                            'lib/jquery/dist/jquery.min.js'
                        ],
                        dest: 'build'
                    }
                ]
            }
        },
        
        ngconstant: {
            options: {
                name: 'serverConfigModule'
            },
            release: {
                options: {
                    dest: 'build/config/config.min.js'
                },
                constants: {
                    serverConfig: {
                        ENV: 'production',
                        API_BASE: '#{ServiceAPI}'
                    }
                }
            }
        },
        
        //Remove the unminified copy of the config file from the build folder
        clean: ['build/config/config.js']
        
        //karma: {
        //    unit: {
        //        configFile: 'karma.conf.js'
        //    }
        //},
    });

    //load Grunt plugins from NPM
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-ng-constant');
    grunt.loadNpmTasks('grunt-contrib-clean');

    //define tasks
    grunt.registerTask('build', ['copy:build', 'ngconstant:release', 'uglify', 'cssmin', 'clean', 'useminPrepare', 'usemin' ]);
};