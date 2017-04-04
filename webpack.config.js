let path =      require("path"),
    webpack =   require("webpack");


module.exports = {
    cache: true,
    devtool: "source-map",
    context: path.join(__dirname, "/src/client"),
    entry: {
        main: "./main",
        vendor: ["redux"]
    },
    output: {
        path: path.join(__dirname, "/public/js/"),
        filename: "[name].js",
        chunkFilename: "[id].js",
        sourceMapFilename: "[name].map",
        publicPath: "/js/"
    },
    module: {
        rules: [
            // required for babel to kick in
            { test: /\.js$/, exclude: /node_modules/, use: [
                { loader: "babel-loader" }
            ]}
        ]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            debug: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            filename: "vendor.js"
        })
    ]
};
