Adonis Gravatar
========================

Integration [gravatar](gravatar.com) into [adonis](https://adonisjs.com/).


## Getting Started

Install the package using the `adonis` CLI.

```bash
> adonis install adonis-midtrans
```

Instruction: ([Click Here](https://github.com/agung96tm/adonis-midtrans/blob/master/instructions.md)).


## Instructions


### Config

The config file is saved as `config/gravatar.js`.

```js
module.exports = {
    size : Env.get('GRAVATAR_SIZE', 100),
    rating: Env.get('GRAVATAR_RATING', 'r'),
    default: Env.get('GRAVATAR_DEFAULT', 'retro')
}
```
or you can use environment variables `.env` file

```
GRAVATAR_SIZE=false
GRAVATAR_RATING=r
GRAVATAR_DEFAULT=retro
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
