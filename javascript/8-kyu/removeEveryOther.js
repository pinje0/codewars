function removeEveryOther(arr) {
    let newArr = []

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            newArr.push(arr[i])
        }
    }

    return newArr
}

console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // [1, 3, 5, 7, 9]
