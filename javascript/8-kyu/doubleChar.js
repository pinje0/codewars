function doubleChar(str) {
    let sum = ""
    for (let i = 0; i < str.length; i++) {
        let myVar = str[i]
        sum += myVar + myVar
    }
    return sum
}
