function disemvowel(str) {
    let vowel = /[aiueo]/gi
    return str.replaceAll(vowel, "")
}

console.log(disemvowel("This website is for losers LOL!")) // Ths wbst s fr lsrs LL!
