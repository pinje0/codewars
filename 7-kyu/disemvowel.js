function disemvowel(str) {
    let res = ''
    for(let i = 0; i < str.length;i++) {
      if(str[i] !== "a" || str[i] !== "i" || str[i] !== "u" || str[i] !== "e" || str[i] !== "o")
      res += str[i]
    }
    console.log(res)
}

console.log(disemvowel("This website is for losers LOL!")) // Ths wbst s fr lsrs LL!
