'use strict';
module.exports = function() {

	var pngquant = require('imagemin-pngquant'),
			buildPath = './build/',
			srcPath = './src/';

	var config = {
		env: 'development',
		build: {
			html: buildPath,
			css: buildPath + 'assets/css/',
			js: buildPath + 'assets/js/',
			img: buildPath + 'assets/images/'
		},
		src: {
			haml: srcPath + 'haml/index.haml',
			scss: srcPath + 'scss/styles.scss',
			js: srcPath + 'js/main.js',
			img: srcPath + 'images/**/*.*'
		},
		watch: {
			haml: srcPath + 'haml/**/*.haml',
			scss: srcPath + 'scss/**/*.scss',
			js: srcPath + 'js/**/*.js',
			img: srcPath + 'images/**/*.*'
		},
		clean: buildPath + '*',
		autoprefixer: {
			browsers: ['last 10 versions']
		},
		browserSyncConfig: {
			server: {
				baseDir: buildPath
			},
			host: 'localhost',
			port: 9000,
			open:        true,
			debug:       true
		},
		cssimport: {
			matchPattern: '*.css'
		},
		extender: {
			annotations: true,
			verbose: false
		},
		imagemin: {
			progressive: true,
			svgoPlugins: [{
				removeViewBox: false
			}],
			use: [pngquant()],
			interlaced: true
		}
	};

	return config;
};