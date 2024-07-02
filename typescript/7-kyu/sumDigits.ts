export function sumDigits(n: number): number {
    let res: number = 0
    let str = String(n)
    for (let i = 0; i < str.length; i++) {
        if (str[i] != "-") {
            res += Number(str[i])
        }
    }

    return res
}
