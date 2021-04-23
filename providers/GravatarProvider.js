'use strict'

const { Gravatar } = require('../src/Core')
const { ServiceProvider } = require('@adonisjs/fold')

class GravatarProvider extends ServiceProvider {
    register () {
        this.app.singleton('Adonis/Addons/Gravatar', (app) => {
            const Config = app.use('Adonis/Src/Config');
            return new Gravatar(Config.get('gravatar'));
        });
        this.app.alias('Adonis/Addons/Gravatar', 'Gravatar');
    }

    boot () {
        // this.app.with('Adonis/Src/View', (View) => {
            // const Gravatar = require('../src/ViewBindings/Gravatar');
            // View.tag(new Gravatar());
        // });
    }
}

module.exports = GravatarProvider
