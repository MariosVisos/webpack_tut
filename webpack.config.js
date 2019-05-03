const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// npx webpack --config webpack.config.js to run the build using this config (--config optional)
// npm run build
// Custom parameters can be passed to webpack by adding two dashes between the npm run build command and your parameters, e.g. npm run build -- --colors.
// Now adjust the config. We'll be adding our src/print.js as a new entry point (print) and we'll change the output as well, so that it will dynamically 
// generate bundle names, based on the entry point names:

//Before we do a build, you should know that the HtmlWebpackPlugin by default will generate its own index.html file, even though we already have one in
// the dist/ folder. This means that it will replace our index.html file with a newly generated one.

module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    devtool: 'inline-source-map',
    devServer : {
        contentBase : './dist'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title:'Output Management'
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    }
};

