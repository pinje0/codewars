function arithmetic(a, b, operator) {
    if (operator == "add") {
        return a + b
    }
    if (operator == "subtract") {
        return a - b
    }
    if (operator == "multiply") {
        return a * b
    }
    if (operator == "divide") {
        return a / b
    }
}

console.log(arithmetic(1, 2, "add")) // 3
