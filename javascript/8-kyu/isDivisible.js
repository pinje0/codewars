function isDivisible(n, x, y) {
    let sum = 0
    for (let i = 1; i <= n; i++) {
        if (n % x === 0 && n % y === 0) {
            sum += 1
        }
    }

    return sum === 0 ? false : true
}

console.log(isDivisible(3, 3, 4))
