// return the two oldest/oldest ages within the array of ages passed in.
export function twoOldestAges(ages: number[]) {
    let s = ages.sort((a, b) => a - b)

    return [s[s.length - 2], s[s.length - 1]]
}
