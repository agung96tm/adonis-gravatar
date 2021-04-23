const md5 = require('md5');

class Gravatar {
    baseUrl = 'https://www.gravatar.com/avatar';

    constructor(config) {
        this.config = config;
    }

    /**
     * Generate gravatar url
     * @param strData is a string. If email is not a string, email will be set to empty string "" by default
     * @param config is a object, values are same as config in `config/gravatar.js`
     * @return gravatar url
     */
    generateGravatarUrl(strData, customConfig) {
        let config = this.config;
        if (customConfig) {
            config = {...this.config, customConfig};
        }

        let strDataHashed = md5(strData.trim().toLowerCase());
        return `${this.baseUrl}/${strDataHashed}?s=${config.size}&r=${config.rating}&d=${config.default}`
    }
}

module.exports = { Gravatar }
