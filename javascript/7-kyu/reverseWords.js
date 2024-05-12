function reverseWords(str) {
    let string = ""
    for (let i = str.length - 1; i >= 0; i--) {
        string += str[i]
    }

    let sum = string.split(" ").reverse()
    return sum.join(" ")
}

console.log(reverseWords("The quick brown fox jumps over the lazy dog.")) // ehT kciuq nworb xof spmuj revo eht yzal .god
