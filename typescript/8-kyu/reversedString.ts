export function solution(str: string): string {
    let rvs: string = ""
    for (let i = str.length - 1; i >= 0; i--) {
        rvs += str[i]
    }
    return rvs
}

console.log(solution("world")) // 'dlrow'
