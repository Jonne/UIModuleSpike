var webpack = require('webpack');

/// <binding AfterBuild='Run - Development' />
var entryfile = require.resolve('./lib/index.js');

module.exports = {

    entry: {
        StoreAvailability: [entryfile]
    },

    devServer: {
        contentBase: '..'
    },

    output: {
        path: './dist',
        filename: "[name].js",
        publicPath: "/assets/",
        libraryTarget: "umd",
        // name of the global var: "Foo"
        library: "StoreAvailability",
        libraryExport: "default"
    },

    module: {
        loaders: [
            {
                //tell webpack to use jsx-loader for all *.jsx files
                test: /\.(jsx|js)$/,
                exclude: './node_modules',
                loader: "babel",
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    externals: [{
        //don't bundle the 'react' npm package with our bundle.js
        //but get it from a global 'React' variable
        'react': 'React',
        'react-dom': 'ReactDOM',
        'location': 'Location'
    }
    ],
    resolve: {
        extensions: ['', '.js', '.jsx'],
        modulesDirectories: ["js", "node_modules"]
    },
    devtool: 'source-map'
};
