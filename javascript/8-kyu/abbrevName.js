function abbrevName(name) {
    let splt = name.split(" ")

    return `${splt[0][0].toUpperCase()}.${splt[1][0].toUpperCase()}`
}

console.log(abbrevName("Sam Harris")) // "S.H"
