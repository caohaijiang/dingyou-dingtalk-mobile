/* eslint-disable */
'use strict';
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = (config) => {

    config.resolve.extensions = ['', '.web.js', '.jsx', '.js', '.json'];
    config.module.loaders = config.module.loaders.filter((n) => !/\.svg/.test(n.test));
    config.module.loaders.forEach((n) => {
        if (/\.jsx/.test(n.test)) {
            n.query.plugins.push(['import', [{ style: 'css', libraryName: 'antd-mobile' }]])
        } else if (/\.(le|c)ss/.test(n.test)) {
            delete n.include;
            if (process.argv[2] === 'server') {
                n.loader = 'style-loader!css-loader?sourceMap!less-loader!postcss-loader';
            } else {
                n.loader = ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader!postcss-loader');
            }
        }
    });
    config.plugins.push(new ExtractTextPlugin('app.css'));
    config.module.loaders.push({
        test: /.svg$/,
        loader: 'svg-sprite-loader',
    });

};