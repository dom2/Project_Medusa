const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

const red = '#F80000';
const black = '#000';
const slate = '#324B5C';
const gray = '#DEE0E0';
const white = '#FFF';
const green = "#3A913F";


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
          "@card-head-color": slate,
          "@card-head-background": white,
          "@layout-header-padding": '10px 50px',
          "@layout-header-background": slate,
          "@layout-header-height": "80px",
          "@tabs-card-head-background": gray,
           "@label-color": "#797979",
        },
       })(config, env);
        return config;
      };