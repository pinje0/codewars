function highAndLow(numbers) {
    let splt = numbers.split(" ")
    let toNum = splt.map(Number)

    return `${Math.max(...toNum)} ${Math.min(...toNum)}`
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")) // "42 -9"
