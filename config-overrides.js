const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

const red = '#F80000';
const black = '#000';
const slate = '#324B5C';
const gray = '#DEE0E0';
const white = '#FFF';
const green = "#1FB214";


module.exports = function override(config, env) {
    config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);  // change importing css to less
       config = rewireLess.withLoaderOptions({
         modifyVars: {
            "@primary-color": green,
            "@body-background": slate,
            "@font-size-base": "16px",
            "@table-header-bg": slate,
            "@table-row-hover-bg": white,
            "@heading-color": white,
            "@card-head-color": gray,
            "@card-head-background": red,
            "@layout-header-background": gray,
            "@layout-header-padding": '10px 50px',
        },
       })(config, env);
        return config;
      };