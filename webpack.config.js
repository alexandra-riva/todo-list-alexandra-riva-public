const path = require('path');

module.exports = {
    entry: './src/index.js', // Your main JavaScript file
    output: {
        filename: 'bundle.js', // Output bundle file
        path: path.resolve(__dirname, 'dist'), // Output directory
    },
    module: {
        rules: [
            {
                test: /\.css$/, // Regex for CSS files
                use: ['style-loader', 'css-loader'], // Loaders for CSS
            },
            {
                test: /\.m?js$/, // Regex for JavaScript files
                exclude: /node_modules/, // Exclude node_modules
                use: {
                    loader: 'babel-loader', // Use Babel loader
                    options: {
                        presets: ['@babel/preset-env'], // Babel preset
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js'], // File extensions to resolve
    },
    mode: 'development', // Set mode
};
