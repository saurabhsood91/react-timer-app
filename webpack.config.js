var webpack = require('webpack');

module.exports = {
    entry: [
        // load jquery, app.jsx and foundation
        // order matters here
        // script! needed as jquery and foundation are not webpack suited
        // using the script-loader module here
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/foundation.min.js',
        './app/app.jsx'
    ],
    externals: {
        jquery: 'jQuery' //so that foundation can attach it's method
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery', //Whenever we encounter $, replace with 'jquery' module,
            'jQuery': 'jquery'
        })
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        alias: {
            // Put aliases for components here
            Main: 'app/components/Main.jsx',
            Nav: 'app/components/Nav.jsx',
            Timer: 'app/components/Timer.jsx',
            Countdown: 'app/components/Countdown.jsx',
            Clock: 'app/components/Clock.jsx',
            applicationStyles: 'app/styles/app.scss'
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map'
};
