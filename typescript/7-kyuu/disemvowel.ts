export class Kata {
    static disemvowel(str: string): string {
        return str.replaceAll(/[aieuo]/gi, "")
    }
}

console.log(Kata.disemvowel("This website is for losers LOL!")) // Ths wbst s fr lsrs LL!
