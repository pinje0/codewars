function solution(nums) {
    if (nums === null) {
        return []
    }

    return nums.sort((a, b) => a - b)
}

// console.log(solution([1, 2, 3, 10, 5]))
console.log(solution([]))
