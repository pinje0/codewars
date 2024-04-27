function removeExclamationMarks(s) {
    let sum = ""
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== "!") {
            sum += s[i]
        }
    }
    return sum
}
