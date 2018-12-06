const path = require('path')
const htmlWebPackPlugin = require("html-webpack-plugin")
const htmlPlugin = new htmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
})
module.exports = {
    entry: "./src/index.jsx",
    output: {
        path: path.resolve("dist"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [{
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: "[name]_[local]_[hash:base64]",
                            sourceMap: true,
                            minimize: true
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: "url-loader?limit=8000&name=images/[name].[ext]"
            }

        ]
    },
    plugins: [htmlPlugin]
}