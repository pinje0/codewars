function sumOfMinimums(arr) {
    let array = []

    for (let i = 0; i < arr.length; i++) {
        array[i] = Math.min(...arr[i])
    }

    return array.reduce((acc, curr) => acc + curr)
}

console.log(
    sumOfMinimums([
        [7, 9, 8, 6, 2],
        [6, 3, 5, 4, 3],
        [5, 8, 7, 4, 5],
    ])
) // 9

//todo [ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
//todo , [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
//todo , [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
//todo ]
