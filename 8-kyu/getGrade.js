function getGrade(...s) {
    const score = s.reduce((acc, curr) => acc + curr) / s.length

    if (score < 60) return "F"
    if (score < 70) return "D"
    if (score < 80) return "C"
    if (score < 90) return "B"
    if (score <= 100) return "A"

    return score
}
