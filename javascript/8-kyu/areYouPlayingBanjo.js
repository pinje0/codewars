function areYouPlayingBanjo(name) {
    return name.substring(0, 1).toLowerCase() == "r" ? `${name} plays banjo` : `${name} does not play banjo`
}

// console.log(areYouPlayingBanjo("Adam")) // Adam doest not play banjo
// console.log(areYouPlayingBanjo("Ringo")) // Ringo plays banjo
