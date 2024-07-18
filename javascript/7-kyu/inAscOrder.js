function inAscOrder(arr) {
    const newArr = [...arr]
    let check = arr.sort((a, b) => a - b)

    return newArr.toString() === check.toString()
}

console.log(inAscOrder([1, 2, 4, 7, 19])) // true
console.log(inAscOrder([1, 6, 10, 18, 2, 4, 20])) // false
