export class Kata {
    static dnaStrand(dna: string) {
        let res: string = ""

        for (let i = 0; i < dna.length; i++) {
            if (dna[i] == "A") {
                res += "T"
            } else if (dna[i] == "T") {
                res += "A"
            } else if (dna[i] == "C") {
                res += "G"
            } else if (dna[i] == "G") {
                res += "C"
            } else {
                res += dna[i]
            }
        }

        return res
    }
}

console.log(dnaStrand("ATTGC")) // TAACG

//TODO A = T
// TODO C = G

// In DNA strings, symbols "A" and "T"
// are complements of each other,
// as "C" and "G".
