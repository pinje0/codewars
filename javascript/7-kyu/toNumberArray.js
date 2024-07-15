function toNumberArray(stringarray) {
    let res = []
    for (let i = 0; i < stringarray.length; i++) {
        res.push(Number(stringarray[i]))
    }

    return res
}

// console.log(toNumberArray(["1", "2", "3"]))
// console.log(toNumberArray(['1.1', '2.2', '3.3']))
