const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const cssnano = require('cssnano');
const ManifestPlugin = require('webpack-manifest-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const useDevServer = false; //true;
const useVersioning = true;
const publicPath = useDevServer ? 'http://localhost:8080/build/' : '/build/';
const isProduction = process.env.NODE_ENV === "production";
const useSourceMaps = !isProduction;

const extractLoader = {
    loader: MiniCssExtractPlugin.loader,
    options: {
        // you can specify a publicPath here
        // by default it uses publicPath in webpackOptions.output
        publicPath: '.',
        hmr: process.env.NODE_ENV === 'development',
        sourceMap: useSourceMaps
    },
};
const cssLoader = {
    loader: 'css-loader',
    options: {
        sourceMap: useSourceMaps
    }
};
const sassLoader = {
    loader: 'sass-loader',
    options: {sourceMap: true}
};
const resolveUrlLoader = {
    loader: 'resolve-url-loader',
    options: {sourceMap: useSourceMaps}
};

const webpackConfig = {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    entry: {
        rep_log: './assets/js/rep_log.js',
        login: './assets/js/login.js',
        layout: './assets/js/layout.js'
    },
    output: {
        path: path.resolve(__dirname, 'web', 'build'),
        filename: useVersioning ? '[name].[hash:7].js' : '[name].js',
        publicPath: publicPath
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    'css-hot-loader',
                    extractLoader,
                    cssLoader
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'css-hot-loader',
                    extractLoader,
                    cssLoader,
                    resolveUrlLoader,
                    sassLoader
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|ico|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {name: '[name]-[hash:6].[ext]'}
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {name: '[name]-[hash:6].[ext]', publicPath: '.'}
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            'window.jQuery': 'jquery',
            'window.$': 'jquery',
        }),
        new CopyWebpackPlugin([
            {
                from: './assets/static',
                to: 'static'
            }
        ]),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: useVersioning ? '[name].[hash:7].css' : '[name].css',
            chunkFilename: useVersioning ? '[id].[hash:7].css' : '[id].css',
        }),
        new ManifestPlugin({
            basePath: 'build/'
        }),
        new CleanWebpackPlugin(),

    ],
    devtool: useSourceMaps ? 'inline-source-map' : false,
    optimization: {
        usedExports: true,
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    },
    devServer: {
        contentBase: './web',
        sockPort: 8080,
        headers: {
            "Access-Control-Allow-Origin": "*",
            // "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            // "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        }
    }
};

if (isProduction) {
    webpackConfig.optimization.minimizer = [new TerserPlugin()];

    webpackConfig.plugins.push(
        new webpack.LoaderOptionsPlugin({
            minimize: true, debug: false
        })
    );

    webpackConfig.plugins.push(
      new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('production')
      })
    );

    webpackConfig.plugins.push(require('cssnano'));
}


module.exports = webpackConfig;