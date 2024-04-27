function filter_list(l) {
    let arr = []
    for (let i = 0; i < l.length; i++) {
        if (typeof l[i] != "string" || l[i] < 0) {
            arr.push(l[i])
        }
    }
    return arr
}

console.log(filter_list([1, 2, "a", "b"]))
