function coffee(str) {
    let res = str.replaceAll(/coffee/gi, function (x) {
        return x.toUpperCase()
    })

    return res
}

console.log(coffee("Is that coffee?  Can I have it?  I'll pay you."))
