const path = require('path');

// npx webpack --config webpack.config.js to run the build using this config (--config optional)
// npm run build
// Custom parameters can be passed to webpack by adding two dashes between the npm run build command and your parameters, e.g. npm run build -- --colors.
// Now adjust the config. We'll be adding our src/print.js as a new entry point (print) and we'll change the output as well, so that it will dynamically 
// generate bundle names, based on the entry point names:

module.exports = {
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};

