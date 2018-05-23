module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			task: {
				src: ['source'],
				dest: 'destination'
			},
			options: {
				'separator': grunt.util.linefeed,
				'banner': '',
				'footer': '',
				'stripBanners': false,
				'process': false,
				'sourceMap': false,
				'sourceMapName': undefined,
				'sourceMapStyle': 'embed'
			}
		},
		uglify: {
			task: {
				src: ['app/js/*.js'],
				dest: 'dest/app.js'
			},
			options: {
				'mangle': {},
				'compress': {},
				'beautify': false,
				'expression': false,
				'report': 'min',
				'sourceMap': false,
				'sourceMapName': undefined,
				'sourceMapIn': undefined,
				'sourceMapIncludeSources': false,
				'enclose': undefined,
				'wrap': undefined,
				'exportAll': false,
				'preserveComments': undefined,
				'banner': '',
				'footer': ''
			}
		},
		watch: {
			task: {
				src: ['source'],
				dest: 'destination'
			},
			options: {
				'spawn': true,
				'interrupt': false,
				'debounceDelay': 500,
				'interval': 100,
				'event': 'all',
				'reload': false,
				'forever': true,
				'dateFormat': null,
				'atBegin': false,
				'livereload': false,
				'cwd': process.cwd(),
				'livereloadOnError': true
			}
		},
		cssmin: {
			task: {
				src: ['source'],
				dest: 'destination'
			},
			options: {
				'banner': null,
				'keepSpecialComments': '*',
				'report': 'min'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.registerTask('default', ['concat', 'uglify', 'watch', 'cssmin']);
};
