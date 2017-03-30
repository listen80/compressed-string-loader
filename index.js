"use strict";

module.exports = function(source) {
	var html = source,
		exports = 'module.exports = ';
		html = html.replace(/\r|\n|\t/g, '');
		html = html.replace(/("|')/g, '\\$1');
		html = html.replace(/ {2,}/g, ' ');
	return exports + '"' + html + '"';
};

