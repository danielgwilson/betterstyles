const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    devtool: "source-map",
    entry: {
        app: "./src/index.ts",
        "function-file": "./function-file/function-file.ts"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".html", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: path.resolve(__dirname, "node_modules"),
                include: path.resolve(__dirname, "src"),
                use: "babel-loader"
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: "ts-loader"
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: "html-loader"
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: "file-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
            chunks: ["app"]
        }),
        new HtmlWebpackPlugin({
            template: "./function-file/function-file.html",
            filename: "function-file/function-file.html",
            chunks: ["function-file"]
        })
    ]
};
