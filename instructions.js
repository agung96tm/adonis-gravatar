'use strict'


const { join } = require('path');

module.exports = async function (cli) {
    try {
        await cli.copy(
            join(__dirname, './config/gravatar.js'), // from
            join(cli.helpers.configPath(), 'gravatar.js') // to
        );
        await cli.command.completed('create', 'config/gravatar.js');
    } catch (error) {
        // ignore error
    }
}
