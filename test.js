const fs = require('fs');
const path = require('path');
const loader = require('./index.js');
// 定义测试目录路径

// 读取 test 目录下的所有文件
const testDir = './test'
fs.readdir(testDir, (err, files) => {
    if (err) {
        console.error('读取目录时出错:', err);
        return;
    }

    // 过滤出所有的 html 文件
    const htmlFiles = files.filter(file => path.extname(file).toLowerCase() === '.html');

    // 读取每个 html 文件
    htmlFiles.forEach(file => {
        const filePath = path.join(testDir, file);
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.error(`读取文件 ${file} 时出错:`, err);
                return;
            }
            const module = {
                exports: ''
            }
            if (!data.length) {
                return
            }
            eval(loader(data));
            console.log(`${file} rate: `, (module.exports.length / data.length * 100).toFixed(2) + '%');
        });
    });
});


