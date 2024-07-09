function tailSwap(arr) {
    const x = arr[0]
    const y = arr[1]

    let xSplit = x.split(":")
    let ySplit = y.split(":")

    return [`${xSplit[0]}:${ySplit[1]}`, `${ySplit[0]}:${xSplit[1]}`]
}

console.log(tailSwap(["a:12345", "777:xyz"])) // [ 'a:xyz', '777:12345' ]
// console.log(tailSwap(["abc:123", "cde:456"])) // ['abc:456', 'cde:123']
