# compressed-string-loader

## 安装
`npm install compressed-string-loader --save-dev`
or
`yarn add compressed-string-loader --dev`
## 说明

### 场景
该 `compressed-string-loader` 主要用于处理 HTML 或 TPL 文件，将其内容压缩后加载到项目中。在一些需要减少文件体积、提高加载性能的场景下非常有用，例如在前端项目里使用模板文件时，通过该 loader 可以压缩模板内容，减少传输的数据量，加快页面加载速度。同时，结合 Webpack 的打包流程，能方便地集成到现有项目中。
### 示例
当项目中有大量的 HTML 模板文件时，使用该 loader 可以自动压缩这些模板文件，在 `webpack.conf.js` 里配置好规则后，Webpack 在打包过程中会自动对匹配的 `.html` 或 `.tpl` 文件进行处理。这样在最终生成的打包文件里，模板内容会以压缩后的形式存在，节省资源。

### 配置
在 `webpack.conf.js` 里，针对 `.html` 或 `.tpl` 文件的规则需要特别配置，以确保使用该 loader 进行处理。
```js
module.exports = {
  //...
  module: {
    rules: [
      //...
      {
        test: /\.(html|tpl)$/,
        loader: 'compressed-string-loader'
      },
      //...
    ]
  }
};
```
这样，在项目构建时，Webpack 会自动应用该 loader 对 `.html` 或 `.tpl` 文件进行处理，压缩文件内容并输出。

## 优化逻辑
### 移除字符串中的换行符、回车符和制表符，减少不必要的空白字符
### 移除HTML注释，清理代码中的注释内容
### 移除标签间的多余空白，保留标签内文本的空格，使HTML结构更紧凑
### 合并标签内连续的空白字符，统一标签内的空白格式
### 移除属性值中的冗余空格，简化属性赋值格式
### 转义字符串中的单引号和双引号，避免字符串拼接时出错
### 移除type属性的默认值，简化常见属性
### 将处理后的内容拼接成可导出的字符串并返回

## 测试结果
> 测试发现大概30%的体积减小（仅供参考）
