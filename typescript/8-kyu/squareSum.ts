export function squareSum(numbers: number[]): number {
    let sum: number = 0
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i] * numbers[i]
    }
    return sum
}

console.log(squareSum([0, 3, 4, 5])) //50
