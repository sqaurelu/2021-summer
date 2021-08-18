const path = require('path');
const webpack = require('webpack');


module.exports = {
    mode: "development", //production
    devtool: 'eval', //hidden-source-map
    resolve: {
        extensions:[ '.js', '.ts']
    },
    entry: {
        app:'./src/index'
    },
    module: {
        rules: [
            {
            test: /\.ts?$/,
            exclude : /node_modules/,
            loader:'ts-loader',
            },
            {
            test: /\.css$/,
            use: ['style-loader','css-loader']
            }
        ]
    },
    plugins: [
        
    ],
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist'),
    }
}