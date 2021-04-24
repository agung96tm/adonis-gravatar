'use strict'

const md5 = require('md5');

class Gravatar {
    baseUrl = 'https://www.gravatar.com/avatar';

    constructor(config) {
        this.config = config;
    }

    /**
     * Generate gravatar url
     * @param email is a string. If email is not a string, email will be set to empty string "" by default
     * @param customConfig is a object, values are same as config in `config/gravatar.js`
     * @return gravatar url
     */
    generateSrc(email, customConfig) {
        let config = this.config;
        if (customConfig) {
            config = {...this.config, customConfig};
        }

        let emailHashed = md5(email.trim().toLowerCase());
        return `${this.baseUrl}/${emailHashed}?s=${config.size}&r=${config.rating}&d=${config.default}`;
    }

    /**
     * Generate gravatar image
     * @param email is a string. If email is not a string, email will be set to empty string "" by default
     * @param alt is a string.
     * @param customConfig is a object, values are same as config in `config/gravatar.js`.
     * @return imageTag gravatar with HTML image code.
     */
    generateImage(email, alt, customConfig) {
        let width =  customConfig?.width || this.config.size;
        let height = customConfig?.height || this.config.size;
        let src = this.generateSrc(email, customConfig);

        return `<img src=${src} alt=${alt} height=${height} width=${width} />`;
    }
}

module.exports = { Gravatar }
