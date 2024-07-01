function solution(str) {
    let arr = []

    if (str.length % 2 !== 0) {
        str += "_"
    }

    for (let i = 0; i < str.length; i += 2) {
        arr.push(str[i] + str[i + 1])
    }

    return arr
}

// console.log(solution("abcdef")) // ["ab", "cd", "ef"]
console.log(solution("abcdefg")) // ["ab", "cd", "ef", "g_"]
