const { resolve } = require("path");

module.exports = {

    entry: {
        // polyfills: "babel-polyfill",
        app: "./src/js/scripts.js"
    },

    output: {
        path: resolve(__dirname + "/dist/js/"),
        filename: "[name].js"
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        plugins: ["transform-runtime"],
                        presets: ["es2015"]
                    }
                }
            }
        ]
    }

};