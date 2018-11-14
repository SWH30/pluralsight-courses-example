const path = require('path');
const fs = require('fs');
const staticDirectory = path.resolve(__dirname, './server/static');

if (!fs.existsSync(staticDirectory)){
    fs.mkdirSync(staticDirectory);
}

module.exports = {
    entry: './client/index.js',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader']
            }
        ]
    },
    devtool: 'source-map',
    output: {
        filename: 'client.js',
        path: path.resolve(__dirname, './server/static')
    }
};
