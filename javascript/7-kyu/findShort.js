function findShort(s) {
    let splt = s.split(" ")
    let low = Infinity

    for (let i = 0; i < splt.length; i++) {
        if (splt[i].length < low) {
            low = splt[i].length
        }
    }

    return low
}

console.log(findShort("Let's travel abroad shall we"))
