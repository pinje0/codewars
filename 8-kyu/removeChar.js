function removeChar(str) {
    let string = ""
    for (let i = 0; i < str.length; i++) {
        if (i !== 0 && i !== str.length - 1) {
            string += str[i]
        }
    }
    return string
}

console.log(removeChar("hello"))
