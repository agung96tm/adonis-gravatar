## Registering provider

The provider is registered inside `start/app.js` file under `providers` array.

```js
const providers = [
  'adonis-gravatar/providers/GravatarProvider'
]
```

## Config

The config file is saved as `config/gravatar.js`.

```js
module.exports = {
    size : Env.get('GRAVATAR_SIZE', 100),
    rating: Env.get('GRAVATAR_RATING', 'r'),
    default: Env.get('GRAVATAR_DEFAULT', 'retro')
}
```

or you can use environment variables that you can set on `.env` file.

```
GRAVATAR_SIZE=false
GRAVATAR_RATING=r
GRAVATAR_DEFAULT=retro
```

