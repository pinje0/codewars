function past(h, m, s) {
    let res = 0

    if (h != 0) {
        res += 3600000 * h
    }

    if (m != 0) {
        res += 60000 * m
    }

    if (s != 0) {
        res += 1000 * s
    }

    return res
}

console.log(past(0, 1, 1)) // 61000
