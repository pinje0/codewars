function stray(numbers) {
    let s = numbers.sort((a, b) => a - b)
    let x = []
    let y = []

    for (let i = 0; i < s.length; i++) {
        if (s[i] == s[0]) {
            x.push(s[i])
        } else {
            y.push(s[i])
        }
    }

    return x.length == 1 ? x[0] : y[0]
}

// console.log(stray([1, 2, 1])) // 2
console.log(stray([17, 17, 3, 17, 17, 17, 17])) // 3
