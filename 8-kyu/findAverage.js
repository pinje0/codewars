function findAverage(array) {
    let sum = 0
    if (array == undefined || array.length == 0) return 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    let average = sum / array.length

    return average
}

console.log(findAverage([1, 2, 3]))
console.log(findAverage([1, 2, 3, 4]))
