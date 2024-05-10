function countPositivesSumNegatives(input) {
    if (input === null) {
        return []
    }

    let positive = []
    let negative = 0

    for (let i = 0; i < input.length; i++) {
        if (input[i] > 0) {
            positive.push(input[i])
        } else if (input[i] < 0) {
            negative += input[i]
        }
    }

    return input.length === 0 ? [] : [positive.length, negative]
}

// console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])) // [10, -65]
// console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14])) // [8, -50]
// console.log(countPositivesSumNegatives([]))
