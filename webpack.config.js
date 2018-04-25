const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname + '/dist/js',
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
        {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            }
        },
        {
            test:  /\.css$/,
            loader:'style-loader!css-loader'
        }
    ]
    },
    plugins: [  //'process.env.NODE_ENV': '"production"'
        new webpack.EnvironmentPlugin({
            NODE_ENV: 'development', 
            DEBUG: false        
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            server: { baseDir: ['dist'] },
            files: ['./dist/*']
        }),
    ],
    watch: true,
    devtool: 'source-map'
};