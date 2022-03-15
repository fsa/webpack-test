"use strict";
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const baseWebpackConfig = require("./webpack.config");
const devWebpackConfig = merge(baseWebpackConfig, {
    mode: "development",
    //devtool: 'cheap-module-eval-source-map',
    devServer: {
        //contentBase: baseWebpackConfig.externals.paths.dist,
        port: 3000
    },
    plugins: [
        //new webpack.SourceMapDevToolPlugin({
        //    filename: "[name][ext].map",
        //}),
    ],
});

module.exports = new Promise((resolve, reject) => {
    resolve(devWebpackConfig);
});