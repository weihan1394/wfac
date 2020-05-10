const PROXY_CONFIG = [
    {
        context: [
            "/api2"
        ],
        target: "http://localhost:4001",
        secure: false,
        pathRewrite: {
            "^/api2": ""
        }
    },
    {
        context: [
            "/api"
        ],
        target: "http://localhost:4000",
        secure: false,
        pathRewrite: {
            "^/api": ""
        }
    }
]

module.exports = PROXY_CONFIG;