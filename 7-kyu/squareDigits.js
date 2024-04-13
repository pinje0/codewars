function squareDigits(num) {
    let sum = ""
    let string = num.toString()
    for (let i = 0; i < string.length; i++) {
        sum += parseInt(string[i]) * parseInt(string[i])
    }
    return parseInt(sum)
}

console.log(squareDigits(3212))
