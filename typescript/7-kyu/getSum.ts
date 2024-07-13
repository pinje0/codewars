export function getSum(a: number, b: number): number {
    let res: number = 0

    if (a < b) {
        for (let i = a; i <= b; i++) {
            res += i
        }
    } else {
        for (let i = b; i <= a; i++) {
            res += i
        }
    }

    return res
}

console.log(getSum(-1, 2))
