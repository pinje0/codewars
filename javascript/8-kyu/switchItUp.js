function switchItUp(number) {
    const num = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"]

    for (let i = 0; i < num.length; i++) {
        if (i == number) {
            return num[i]
        }
    }
}
