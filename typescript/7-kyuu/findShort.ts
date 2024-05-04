export function findShort(s: string): number {
    let splt: string[] = s.split(" ")
    let low: number = Infinity

    for (let i = 0; i < splt.length; i++) {
        if (splt[i].length < low) {
            low = splt[i].length
        }
    }

    return low
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps")) // 3
