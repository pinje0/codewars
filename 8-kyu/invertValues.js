function invert(array) {
    let sum = []
    for (let i = 0; i < array.length; i++) {
        sum.push(-array[i])
    }
    return sum
}
console.log(invert([1, 2, 3, 4, 5]))
