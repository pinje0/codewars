export class Kata {
    static highAndLow(numbers: string): string {
        let num: number[] = numbers.split(" ").map(Number)
        return `${Math.max(...num)} ${Math.min(...num)}`
    }
}

console.log(Kata.highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))
