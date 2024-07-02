function sumDigits(number) {
    let s = String(number)
    let res = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] != "-") {
            res += Number(s[i])
        }
    }

    return res
}

// console.log(sumDigits(10)) // 1
// console.log(sumDigits(99)) // 18
console.log(sumDigits(-32)) //
