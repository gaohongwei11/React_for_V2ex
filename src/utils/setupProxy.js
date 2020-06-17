// const proxy = require('http-proxy-middleware')

// module.exports = function (app) {
//     app.use(
//         proxy('/api', {
//             target: 'https://www.v2ex.com',
//             changeOrigin: true,
//             pathRewrite: {
//             '^/api': '',
//             }
//         })
//     )
//     app.use(
//         proxy('/v2ex', {
//             target: 'https://www.v2ex.com',
//             changeOrigin: true
//         })
//     )
// }
