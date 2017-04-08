/* eslint-disable */
'use strict';

module.exports = (config) => {
    config.resolve.extensions = ['', '.web.js', '.jsx', '.js', '.json'];
    config.module.loaders = config.module.loaders.filter((n) => !/\.svg/.test(n.test));
    config.module.loaders.forEach((n) => {
        if (/\.jsx/.test(n.test)) {
            n.query.plugins.push(['import', [{ style: 'css', libraryName: 'antd-mobile' }]])
        } else if (/\.css/.test(n.test)) {
            delete n.include;
        }
    });
    config.module.loaders.push({
        test: /.svg$/,
        loader: 'svg-sprite-loader',
    });
};