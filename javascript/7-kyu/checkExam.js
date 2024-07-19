function checkExam(array1, array2) {
    let count = 0

    for (let i = 0; i < array2.length; i++) {
        if (array2[i] == "") {
            count += 0
        } else if (array2[i] !== array1[i]) {
            count -= 1
        } else {
            count += 4
        }
    }

    return count < 0 ? 0 : count
}

//todo correct = +4
//todo incorrect = -1
//todo blank = +0

// console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"])) // 6
// console.log(checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"])) // 0
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""])) // 7
