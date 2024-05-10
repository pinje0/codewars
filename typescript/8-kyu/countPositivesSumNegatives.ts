export function countPositivesSumNegatives(input: any) {
    if (input === null || input.length === 0) {
        return []
    }

    let positive: number[] = []
    let negative: number = 0

    for (let i = 0; i < input.length; i++) {
        if (input[i] > 0) {
            positive.push(input[i])
        } else if (input[i] < 0) {
            negative += input[i]
        }
    }

    return [positive.length, negative]
}
