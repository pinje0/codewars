var isSquare = function (n) {
    if (n < 0) {
        return false
    }

    return Math.sqrt(n) % 1 === 0 ? true : false
}

console.log(isSquare(-1)) // false
console.log(isSquare(0)) // true
console.log(isSquare(3)) // false
