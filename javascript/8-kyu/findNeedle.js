function findNeedle(haystack) {
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] == "needle") {
            return `found the needle at position ${i}`
        }
    }
}

console.log(findNeedle(["3", "123124234", undefined, "needle", "world", "hay", 2, "3", true, false]))
