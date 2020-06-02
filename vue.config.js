module.exports = {
    chainWebpack: (config) => {
        if (process.env.NODE_ENV === 'test') {
            const scssRule = config.module.rule('scss');
            scssRule.uses.clear();
            scssRule
                .use('null-loader')
                .loader('null-loader');
        }
    },
};
