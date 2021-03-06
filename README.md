Adonis Gravatar
========================

Integration [gravatar](gravatar.com) into [adonis](https://adonisjs.com/).


## Getting Started

Install the package using the `adonis` CLI.

```bash
> adonis install adonis-gravatar
```

Instruction: ([Click Here](https://github.com/agung96tm/adonis-gravatar/blob/master/instructions.md)).


## Instructions


### Config

The config file is saved as `config/gravatar.js`.

```js
module.exports = {
    size : Env.get('GRAVATAR_SIZE', 100),
    rating: Env.get('GRAVATAR_RATING', 'r'),
    default: Env.get('GRAVATAR_DEFAULT', 'mp')
}
```
or you can use environment variables that you can set on `.env` file.

```
GRAVATAR_SIZE=false
GRAVATAR_RATING=r
GRAVATAR_DEFAULT=mp
```

### How To Use

on controller:
```javascript
const Gravatar = use('Gravatar');

class AwesomeController {
  index ({ view }) {
    const gravatarUrl = Gravatar.generateSrc('agung.96tm@gmail.com');
    // result: `https://www.gravatar.com/avatar/91f0a80a65760?s=100&r=r&d=retro`

    const gravatarHtmlImage = Gravatar.generateImage(
        'agung.96tm@gmail.com', 'Current User'
    );
    const gravatarHtmlImageWithConfig = Gravatar.generateImage(
        'agung.96tm@gmail.com', 'Current User', { size: 200, default: 'retro' }
    );
    // result: `<img src="https://www.gravatar.com/avatar/91f0a80a65760 alt="Current User" ... >`

    return gravatarUrl;
  }
}
```

on view:
```html
<body>
  <h1>Hello World</h1>

  <div>
      <img 
        src="{{ gravatarUrl('agung.9tm@gmail.com', { size: 100 })  }}" 
        alt="Current User">
  </div>

  <div>
    <!-- INFO: with {{{ ... }}} instead of {{ ... }} -->

    {{{ gravatarImage('agung.96tm@gmail.com', 'Current User')  }}}

    <!-- with custom config -->
    {{{ gravatarImage('agung.96tm@gmail.com', 'Current User', { width: 100, height: 100 })  }}}
    {{{ gravatarImage('agung.96tm@gmail.com', 'Current User', { width: 100, height: 100, default: 'robohash' })  }}}
  </div>
</body>
```


## Properties

| Argument      | Description                                                                   | Type                                                                            | Default                          |
| ------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | -------------------------------- |
| `size`        | Size of gravatar.                                                             | `number`                                                                        | 100                              |
| `rating`      | Rating of gravatar.                                                           | `g`, `pg`, `r`, `x`                                                             | r                                |
| `default`     | gravatar has a number of built in options which you can also use as defaults  | `404`, `mp`, `identicon`, `monsterid`, `wavatar`, `retro`, `robohash`, `blank`  | mp                               |         
| `width`       | set attribute width for HTML image, used by `gravatarImage` function          | `string`                                                                        | same as size argument            |
| `height`      | set attribute height for HTML image, used by `gravatarImage` function         | `string`                                                                        | same as size argument            |



## Authors
<table>
  <tr>
    <td align="center">
      <a href="https://agung96tm.com/">
        <img src="https://avatars.githubusercontent.com/u/1901484?v=4" width="100px;" alt=""/><br />
        <b>Agung Yuliyanto</b><br>
      </a>
      <div>????</div>
    </td>
  </tr>
</table>
