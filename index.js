function isWin(game){
    return game.result === "W"
}

function superbowlWin(record){
    let win = record.find(isWin)
    if(win !== undefined){
        return win.year
    }
    return undefined

}