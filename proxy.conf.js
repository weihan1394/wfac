const PROXY_CONFIG = [
    {
        context: [
            "/api"
        ],
        target: "http://localhost:4000/api",
        secure: false,
        changeOrigin: true,
        pathRewrite: {
            "^/api": ""
        },
        logLevel: "debug"
    }
   
]

module.exports = PROXY_CONFIG;