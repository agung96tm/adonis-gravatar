Adonis Gravatar
========================

Integration [gravatar](gravatar.com) into [adonis](https://adonisjs.com/).


## Instructions

### Registering provider

The provider is registered inside `start/app.js` file under `providers` array.

```js
const providers = [
  'adonis-gravatar/providers/GravatarProvider'
]
```

### Config

The config file is saved as `config/gravatar.js`.

```js
module.exports = {
    size : Env.get('GRAVATAR_SIZE', 100),
    rating: Env.get('GRAVATAR_RATING', 'r'),
    default: Env.get('GRAVATAR_DEFAULT', 'retro')
}
```


## Authors
<table>
  <tr>
    <td align="center">
      <a href="https://agung96tm.com/">
        <img src="https://avatars.githubusercontent.com/u/1901484?v=4" width="100px;" alt=""/><br />
        <b>Agung Yuliyanto</b><br>
      </a>
      <div>💻</div>
    </td>
  </tr>
</table>
