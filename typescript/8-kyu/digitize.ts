export const digitize = (n: number): number[] => {
    return String(n).split("").map(Number).reverse()
}
