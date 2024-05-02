function sum(numbers) {
    return numbers == 0 ? 0 : numbers.reduce((acc, curr) => acc + curr)
}

console.log(sum([1, 5.2, 4, 0, -1]))
