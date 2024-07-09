export function tailSwap(arr: [string, string]): [string, string] {
    let x: string[] = arr[0].split(":")
    let y: string[] = arr[1].split(":")

    return [`${x[0]}:${y[1]}`, `${y[0]}:${x[1]}`]
}

console.log(tailSwap(["a:12345", "777:xyz"]))
