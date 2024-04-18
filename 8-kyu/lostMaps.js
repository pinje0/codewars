function maps(x) {
    let sum = []
    for (let i = 0; i < x.length; i++) {
        sum.push(x[i] * 2)
    }
    return sum
}

console.log(maps([4, 1, 1, 1, 4]))
