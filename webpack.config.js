const { join }          = require('path');
      webpack           =   require("webpack");


module.exports = {
    cache: true,
    devtool: "source-map",
    context: join(__dirname, "/src/client"),
    entry: [
        'react-hot-loader/patch',
        'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
        './main'
    ],
    devServer: { hot: true },
    output: {
        path: join(__dirname, "/public/js/"),
        filename: "[name].js",
        chunkFilename: "[id].js",
        sourceMapFilename: "[name].map",
        publicPath: "/"
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
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("dev")
            }
        })
    ]
};
