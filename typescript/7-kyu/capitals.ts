export function capitals(word: string): number[] {
    let res: number[] = []

    for (let i = 0; i < word.length; i++) {
        if (/([A-Z])/.test(word[i])) {
            res.push(i)
        }
    }

    return res
}
