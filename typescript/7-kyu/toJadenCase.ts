String.prototype.toJadenCase = function () {
    let s = this.split(" ").map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1)
    })

    return s.join(" ")
}

interface String {
    // Declaration needed, don't remove it
    toJadenCase(): string
}
