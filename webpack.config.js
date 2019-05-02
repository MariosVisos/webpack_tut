const path = require('path');

// npx webpack --config webpack.config.js to run the build using this config (--config optional)
// npm run build
// Custom parameters can be passed to webpack by adding two dashes between the npm run build command and your parameters, e.g. npm run build -- --colors.

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                'style-loader',
                'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                'file-loader'
                ]
            },
            {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(csv|tsv)$/,
                use: [
                'csv-loader'
                ]
            },
            {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            }
        ]
    }
};

//Now, when you import MyImage from './my-image.png', that image will be processed and added to your output directory and the MyImage variable will contain the final
// url of that image after processing. When using the css-loader, as shown above, a similar process will occur for url('./my-image.png') within your CSS. The loader
// will recognize this is a local file, and replace the './my-image.png' path with the final path to the image in your output directory. The html-loader handles 
// <img src="./my-image.png" /> in the same manner.