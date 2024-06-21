export function solution(nums: number[]): number[] {
    return nums.sort(function (a, b) {
        return a - b
    })
}

console.log(solution([1, 2, 10, 50, 5])) // [1,2,5,10,50]
