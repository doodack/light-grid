﻿/* global module */

module.exports = function (config) {
	config.set({
		basePath: "..",
		singleRun: true,
		autoWatch: false,

		frameworks: ["jasmine"],
		
		browsers: ["PhantomJS", "Firefox", "Chrome"],

		files: [
			"libs/jquery*.js",
			"libs/angular*.js",
			"src/moduleDefinition.js",
			"src/**/*.js",
			"test/lib/angular-mocks.js",
			"test/unit/*.js"
		]
	});
};