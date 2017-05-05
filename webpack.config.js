/*const webpack = require('webpack')

//Make everything that is inside this object visible outside of this file
module.exports = {
    entry: './ex/index.js', //This will be the entry file for the webpack, the initial one
    output: {
        path: __dirname + '/public',
        filename: './bundle.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public'
    }
}*/


const webpack = require('webpack')

module.exports = {
    entry: './ex/index.js',
    output: {
        path: __dirname + '/public',
        filename: './bundle.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public'
    }
}