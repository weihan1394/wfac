const PROXY_CONFIG = [
    {
        context: [
            "/api2"
        ],
        target: "http://localhost:4001/api",
        secure: false,
        changeOrigin: true,
        pathRewrite: {
            "^/api2": ""
        },
        logLevel: "debug"
    },
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