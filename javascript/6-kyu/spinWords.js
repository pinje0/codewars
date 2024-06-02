function spinWords(string) {
    let res = string.split(" ").map((word) => (word.length >= 5 ? word.split("").reverse().join("") : word))

    return res.join(" ")
}

console.log(spinWords("Welcome"))
console.log(spinWords("Hey fellow warriors")) // Hey wollef sroirraw
