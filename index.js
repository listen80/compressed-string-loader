"use strict";

/**
 * 对传入的源代码进行压缩处理，包含移除空白字符、转义引号、移除HTML注释、简化标签和属性等操作，
 * 最终将处理后的内容转换为可导出的字符串形式。
 * @param {string} html - 输入的源代码字符串
 * @returns {string} - 处理后的可导出的字符串，格式为 'module.exports = "处理后的内容"'
 */
module.exports = function (html) {
	// 移除字符串中的换行符、回车符和制表符，减少不必要的空白字符
	html = html.replace(/\r|\n|\t/g, '');

	// 移除HTML注释，清理代码中的注释内容
	html = html.replace(/<!--[\s\S]*?-->/g, '');

	// 移除标签间的多余空白，保留标签内文本的空格，使HTML结构更紧凑
	html = html.replace(/>\s+</g, '><');

	// 合并标签内连续的空白字符，统一标签内的空白格式
	html = html.replace(/\s{2,}/g, ' ');

	// 移除属性值中的冗余空格，简化属性赋值格式
	html = html.replace(/\s*=\s*/g, '=');

	// 转义字符串中的单引号和双引号，避免字符串拼接时出错
	html = html.replace(/("|')/g, '\\$1');

	// 移除type属性的默认值，简化常见属性
	html = html.replace(/type="text\/javascript"/g, '');
	html = html.replace(/type="text\/css"/g, '');

	// 将处理后的内容拼接成可导出的字符串并返回
	return 'module.exports = "' + html + '"';
};
