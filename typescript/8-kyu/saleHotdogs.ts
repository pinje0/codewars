export function saleHotdogs(n: number): number {
    if (n >= 5 && n < 10) {
        return n * 95
    } else if (n < 5) {
        return n * 100
    } else {
        return n * 90
    }
}
