export function betterThanAverage(classPoints: number[], yourPoints: number): boolean {
    let sum: number = classPoints.reduce((acc, curr) => acc + curr, 0)
    return sum / classPoints.length < yourPoints ? true : false
}

console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)) // true
