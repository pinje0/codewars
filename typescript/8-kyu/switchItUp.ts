export function switchItUp(intNumber: number): string {
    const num: string[] = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"]
    let res: string = ""
    for (let i = 0; i < num.length; i++) {
        if (i == intNumber) {
            res += num[i]
        }
    }

    return res
}
console.log(switchItUp(1))
