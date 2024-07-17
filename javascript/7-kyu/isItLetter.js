function isItLetter(character) {
    return /[a-z]/i.test(character)
}

console.log(isItLetter("2")) // false
console.log(isItLetter("a")) // true
