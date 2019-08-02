const { override, fixBabelImports, addLessLoader } = require('customize-cra');
// 利用addLessLoader来帮助加载 less 样式, less变量覆盖实现主题配置
module.exports = override(
   fixBabelImports('import', {
     libraryName: 'antd',
     libraryDirectory: 'es',
     style: true
   }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#1DA57A' },
    }),
 );