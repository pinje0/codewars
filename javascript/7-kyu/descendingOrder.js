function descendingOrder(n) {
    let arr = String(n)
        .split("")
        .map((n) => {
            return Number(n)
        })
        .sort((a, b) => b - a)
        .join()
        .replaceAll(",", "")

    return Number(arr)
}

console.log(descendingOrder(123456789)) // 987654321
