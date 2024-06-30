var capitals = function (word) {
    let res = []

    for (let i = 0; i < word.length; i++) {
        if (/([A-Z])/.test(word[i])) {
            res.push(i)
        }
    }

    return res
}

console.log(capitals("CodEWaRs")) // [0,3,4,6]
