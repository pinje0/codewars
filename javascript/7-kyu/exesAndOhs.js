function XO(str) {
    let x = []
    let o = []
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "x" || str[i] === "X") {
            x.push(str[i])
        }

        if (str[i] === "o" || str[i] === "O") {
            o.push(str[i])
        }
    }

    return x.length === o.length ? true : false
}

// console.log(XO("xo")) // true
// console.log(XO("xxOo")) //true
// console.log(XO("xxxm")) // false
// console.log(XO("Oo")) // false
// console.log(XO("zpzpzpp")) // when no 'x' and 'o' is present should return true
