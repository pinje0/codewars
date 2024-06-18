var number = function (array) {
    if (array.length == 0) {
        return []
    }

    let res = ""

    for (let i = 0; i < array.length; i++) {
        res += `${i + 1}: ${array[i]},`
    }

    let s = res.split(",")
    s.pop()

    return s
}

// console.log(number([])) // []
console.log(number(["a", "b", "c"])) // ["1: a", "2: b", "3: c"]
