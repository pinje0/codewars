export function spinWords(words: string): string {
    return words
        .split(" ")
        .map((word) => (word.length >= 5 ? word.split("").reverse().join("") : word))
        .join(" ")
}

console.log(spinWords("Welcome"))
// console.log(spinWords("Hey fellow warriors")) // Hey wollef sroirraw
