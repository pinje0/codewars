export function abbrevName(name: string): string {
    let splt = name.split(" ")

    return `${splt[0][0].toUpperCase()}.${splt[1][0].toUpperCase()}`
}
