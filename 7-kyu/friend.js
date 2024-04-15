function friend(friends) {
    const isFriend = []
    for (let i = 0; i < friends.length; i++) {
        if (friends[i].length == 4) {
            isFriend.push(friends[i])
        }
    }
    return isFriend
}

console.log(friend(["Ryan", "Kieran", "Mark"]))
console.log(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]))
