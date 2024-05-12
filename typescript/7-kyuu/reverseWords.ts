export function reverseWords(str: string): string {
    let s: string = ""
    for (let i = str.length - 1; i >= 0; i--) {
        s += str[i]
    }
    let sum = s.split(" ").reverse()
    return sum.join(" ")
}

console.log(reverseWords("The quick brown fox jumps over the lazy dog."))
