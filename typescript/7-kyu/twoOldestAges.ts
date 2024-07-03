// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages) {
    let s = ages.sort((a, b) => a - b)

    return [s[s.length - 2], s[s.length - 1]]
}
