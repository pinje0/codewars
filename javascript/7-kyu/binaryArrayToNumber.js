const binaryArrayToNumber = (arr) => {
    let j = arr.join("")
    return parseInt(j, 2)
}

console.log(binaryArrayToNumber([0, 0, 1, 0])) // 0001 -> 1
