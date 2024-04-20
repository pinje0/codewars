function oddOrEven(array) {
    let sum = array.reduce((acc, curr) => acc + curr, 0)

    return sum % 2 == 0 ? "even" : "odd"
}

console.log(oddOrEven([0])) // even
console.log(oddOrEven([1])) // odd
console.log(oddOrEven([])) // even
console.log(oddOrEven([1023, 1, 2])) // even
console.log(oddOrEven([-1023, 1, -2])) // even
