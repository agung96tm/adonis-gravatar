const Env = use('Env');


module.exports = {
    size : Env.get('GRAVATAR_SIZE', 100),
    rating: Env.get('GRAVATAR_RATING', 'r'),
    default: Env.get('GRAVATAR_DEFAULT', 'retro'),
    // forceDefault: Env.get('GRAVATAR_FORCE_DEFAULT', false) === 'true',
    // forceLower: Env.get('GRAVATAR_FORCE_LOWER', false) === 'true',
}
