function sumStrings(a, b) {
    let res = BigInt(a) + BigInt(b)
    return String(res)
}

console.log(sumStrings("123", "456"))
