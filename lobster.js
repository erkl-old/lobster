function lobster(n) {
  var running = []
    , waiting = []

  n = Math.max(+n, 0) || 1

  function run(item) {
    running.push(item)

    item.fn(function () {
      process.nextTick(function () { unlock(item) })
    })
  }

  function lock(fn) {
    var item = { fn: fn }

    if (running.length < n) {
      run(item)
    } else {
      waiting.push(item)
    }
  }

  function unlock(item) {
    running = running.filter(function (v) {
      return v !== item
    })

    if (running.length < n && waiting.length > 0) {
       run(waiting.shift())
    }
  }

  return lock
}

module.exports = lobster
