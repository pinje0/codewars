export function removeChar(str: string): string {
    let res: string = ""
    for (let i = 0; i < str.length; i++) {
        if (i !== 0 && i !== str.length - 1) {
            res += str[i]
        }
    }
    return res
}

console.log(removeChar("eloquent")) // loquen
