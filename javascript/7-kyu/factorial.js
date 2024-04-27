function factorial(n) {
    let arr = []
    for (let i = n; i >= 1; i--) {
        arr.push(i)
    }
    let res = arr.reduce((acc, curr) => acc * curr, 1)

    return res
}

console.log(factorial(4))
