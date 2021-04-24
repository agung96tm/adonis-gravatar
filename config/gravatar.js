'use strict'

// Visit: https://en.gravatar.com/site/implement/images more detail.

const Env = use('Env');


module.exports = {
    /*
    |--------------------------------------------------------------------------
    | Size
    |--------------------------------------------------------------------------
    | Size of gravatar,
    | used as default for generate src and HTML image
    |
    */
    size : Env.get('GRAVATAR_SIZE', 100),

    /*
    |--------------------------------------------------------------------------
    | Rating
    |--------------------------------------------------------------------------
    | Rating of gravatar
    | default: 'r',
    | other: 'g', 'pg', 'r' and 'x'
    |
    */
    rating: Env.get('GRAVATAR_RATING', 'r'),

    /*
    |--------------------------------------------------------------------------
    | Default
    |--------------------------------------------------------------------------
    | Gravatar has a number of built in options which you can also use as defaults
    | default: 'mp',
    | other: '404', 'mp', 'identicon', 'monsterid', 'wavatar', 'retro', 'robohash', 'blank'
    |
    */
    default: Env.get('GRAVATAR_DEFAULT', 'mp'),
}
