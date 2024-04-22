function getCount(str) {
    let sum = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "a" || str[i] === "i" || str[i] === "u" || str[i] === "e" || str[i] === "o") sum++
    }
    return sum
}

console.log(getCount("abracadabra")) // 5
