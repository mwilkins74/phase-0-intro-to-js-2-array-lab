let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push('Ralph')
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat(name) {
    cats.pop()
}

function destructivelyRemoveFirstCat(name) {
    cats.shift()
}

function appendCat(name) {
    return [...cats, "Broom"]
}

function prependCat(name) {
    return ["Arnold", ...cats]
}

function removeLastCat(name) {
    const removeLast = cats.slice(0, cats.length - 1)
    return removeLast
}

function removeFirstCat(name) {
    const removeFirst = cats.slice(1)
    return removeFirst
}