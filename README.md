**lobster** provides a very simple FIFO lock primitive.

#### Usage

```js
var lobstr = require('lobster')
  , lock = lobstr()

for (var i = 0; i < 10; i++) {
  lock(function (i, yield) {
    console.log(i)
    setTimeout(yield, 50)
  }.bind(null, i))
}
```
