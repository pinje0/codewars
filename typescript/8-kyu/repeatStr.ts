export function repeatStr(n: number, s: string): string {
    // Solution 1
    let res: string = ""
    for (let i = 0; i < n; i++) {
        res += s
    }
    return res

    // Solution 2
    // s.repeat(n)
}

console.log(repeatStr(3, "*")) // ***
