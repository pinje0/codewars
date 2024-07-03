// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages) {
    let s = ages.sort((a, b) => a - b)

    return [s[s.length - 2], s[s.length - 1]]
}

console.log(twoOldestAges([1, 5, 87, 45, 8, 8]))
