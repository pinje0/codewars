function nothingSpecial(str) {
    if (typeof str !== "string") {
        return "Not a string!"
    }

    let res = str.replaceAll(/[^a-zA-Z0-9\s]/g, "")

    return res
}

// console.log(nothingSpecial(25))
console.log(nothingSpecial("%^Take le$ft ##quad%r&a&nt"))
