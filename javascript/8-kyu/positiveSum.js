function positiveSum(arr) {
    let myArr = []
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
        if (arr[i] > 0) {
            myArr.push(arr[i])
        }
    }

    for (let j = 0; j < myArr.length; j++) {
        console.log(myArr[j])
        sum += myArr[j]
    }

    return sum
}
