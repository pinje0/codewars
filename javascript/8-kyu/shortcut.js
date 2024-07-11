function shortcut(string) {
    return string.replace(/[aiueo]/gi, "")
}

console.log(shortcut("hello"))
