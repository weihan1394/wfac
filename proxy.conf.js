const PROXY_CONFIG = [
    {
        context: [
            "/api2"
        ],
        target: "https://api-wfacp.psoseak.org/api/forms",
        secure: true,
        pathRewrite: {
            "^/api2": ""
        },
        logLevel: "debug"
    },
    {
        context: [
            "/api"
        ],
        target: "https://api-wfacp.psoseak.org/api/forms",
        secure: false,
        changeOrigin: true,
        pathRewrite: {
            "^/api": ""
        },
        logLevel: "debug"
    }
]

module.exports = PROXY_CONFIG;