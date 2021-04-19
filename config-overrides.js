const path = require('path')
const { override, fixBabelImports, addLessLoader, addWebpackAlias, addPostcssPlugins } = require('customize-cra');

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        style: 'css',
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars:{'@primary-color':'#1DA57A'},
    }),
    addWebpackAlias({
        ['@']: path.resolve(__dirname, './src'),
    }),
    addPostcssPlugins([
        require('postcss-import'),
        require('postcss-url'),
        require('postcss-flexbugs-fixes'),
        require('postcss-preset-env')({
            autoprefixer: {
                flexbox: 'no-2009',
            },
            stage: 3,
        }),
        require('postcss-aspect-ratio-mini')({}),
        require('postcss-px-to-viewport')({
            viewportWidth: 750, // (Number) The width of the viewport.
            viewportHeight: 1334, // (Number) The height of the viewport.
            unitPrecision: 3, // (Number) The decimal numbers to allow the REM units to grow to.
            viewportUnit: 'vw', // (String) Expected units.
            selectorBlackList: ['.ignore', '.hairlines','.common-con-top', '.common-con-bottom'], // (Array) The selectors to ignore and leave as px.
            minPixelValue: 1, // (Number) Set the minimum pixel value to replace.
            mediaQuery: false, // (Boolean) Allow px to be converted in media queries.
            exclude: /(\/|\\)(node_modules)(\/|\\)/ // 排除node_modules文件中第三方css文件
        }),
        require('postcss-write-svg')({
            utf8: false
        }),
        require('postcss-viewport-units')({
            filterRule: rule => rule.nodes.findIndex(i => i.prop === 'content') === -1 // 过滤伪类content使用
        }),
        require('cssnano')({
            preset: "advanced",
            autoprefixer: false,
            "postcss-zindex": false
        })
    ])
);