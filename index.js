var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name)
  returns (kittens)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  returns (kittens)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  returns (kittens)
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  returns (kittens)
}

function appendKitten(name) {
  var newKittens = [...kittens, name]
  return (newKittens)
}

function prependKitten(name) {
  var newKittens = [name, ...kittens]
  return (newKittens)
}

function removeLastKitten() {
  var newKittens = kittens.slice(0, (kittens.length-1))
  return (newKittens)
}
