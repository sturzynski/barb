const path        = require('path');

const dev_config  = require('./webpack.config.development');
const prod_config = require('./webpack.config.production');

module.exports = function(env) {
    if (env == 'production')
    {
        return prod_config;
    }
    else if (env == 'development')
    {
        return dev_config;
    }
}