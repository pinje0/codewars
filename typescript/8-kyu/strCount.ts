export function strCount(str: string, letter: string): number {
    let count: number = 0

    for (let i = 0; i < str.length; i++) {
        if (str[i] == letter) {
            count++
        }
    }

    return count
}

console.log(strCount("Hello", "o")) // 1
