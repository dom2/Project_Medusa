const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
const theme = require('./src/theme/settings').theme;

module.exports = function override(config, env) {
    config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config); // change importing css to less
    config = rewireLess(config, env, {
        //customize 
        modifyVars: theme,
    });
    return config;
};