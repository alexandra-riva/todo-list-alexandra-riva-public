const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        publicPath: '/', // This allows the server to resolve paths correctly
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'], // This handles CSS
            },
        ],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'), // Serves the public folder
        },
        compress: true,
        port: 3003,
    },
};
