//* Solution 1
// function bonusTime(salary, bonus) {
//     if (bonus) {
//         return `\u00A3${salary * 10}`
//     } else {
//         return `\u00A3${salary}`
//     }
// }

//* Solution 2
function bonusTime(salary, bonus) {
    return bonus ? `\u00A3${salary * 10}` : `\u00A3${salary}`
}

console.log(bonusTime(10000, false))
