const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/api', {
            target: 'https://cnodejs.org',
            changeOrigin: true,
            pathRewrite: {
            '^/api': '/api/v1',
            }
        })
    )
}
