function squareSum(numbers) {
    let square = []
    let sum = 0

    for (let i = 0; i < numbers.length; i++) {
        square.push(numbers[i] * numbers[i])
    }

    for (let j = 0; j < square.length; j++) {
        sum += square[j]
    }
    return sum
}
