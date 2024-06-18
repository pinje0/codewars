export function number(array: string[]): string[] {
    if (array.length == 0) {
        return []
    }

    let str: string = ""

    for (let i = 0; i < array.length; i++) {
        str += `${i + 1}: ${[array[i]]},`
    }

    let s = str.split(",")
    s.pop()

    return s
}

console.log(number(["a", "b", "c"])) // ["1: a", "2: b", "3: c"]
