var webpack = require('webpack');

module.exports = {
    entry: {
        app: './js/router.js',
        vendors: ['react', 'react-router']
    },
    output: {
        path: './public',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: 'babel'
            },
            { 
                test: /\.less$/, 
                exclude: /(node_modules)/,
                loader: "style!css!less"
            },
            { 
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
                loader: 'url-loader?limit=10000&minetype=application/font-woff' 
            },
            { 
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
                loader: 'file-loader' 
            },
            { 
                test: /\.(png|jpg)$/, 
                loader: 'url-loader?limit=8192'
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
    ]
}