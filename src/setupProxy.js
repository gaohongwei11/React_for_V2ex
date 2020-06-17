const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/api', {
            target: 'https://www.v2ex.com',
            changeOrigin: true,
            pathRewrite: {
            '^/api': '/api',
            }
        })
    )
    app.use(
        createProxyMiddleware('/v2ex', {
            target: 'https://www.v2ex.com',
            changeOrigin: true
        })
    )
}
