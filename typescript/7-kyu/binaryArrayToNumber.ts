export function binaryArrayToNumber(arr: number[]): number {
    let j = arr.join("")
    return parseInt(j, 2)
}
