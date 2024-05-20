var str = "How can mirrors be real if our eyes aren't real"
String.prototype.toJadenCase = function () {
    let s = this.split(" ").map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1)
    })

    return s.join(" ")
}

console.log(str.toJadenCase())
