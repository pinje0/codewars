function withoutLast(arr) {
    // const res = []
    // for (let i = 0; i < arr.length; i++) {
    //     if (i !== arr.length - 1) {
    //         res.push(arr[i])
    //     }
    // }
    // return res

    const newArr = [...arr]
    newArr.pop()

    return newArr
}

console.log(withoutLast([29, 88, 75, 14, 81, 2, 46, 15, 89, 89, 88, 23, 57]))

// Output
// [ 29, 88, 75, 14, 81, 2, 46, 15, 89, 89, 88, 23, 57 ]

// Expected
// [ 29, 88, 75, 14, 81, 2, 46, 15, 89, 89, 88, 23 ]
