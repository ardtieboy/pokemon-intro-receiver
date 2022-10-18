function toon_emoji (pokemon: string) {
    if (pokemon == "Charizard") {
        basic.showIcon(IconNames.Skull)
    } else if (pokemon == "Blastoise") {
        basic.showIcon(IconNames.Umbrella)
    } else {
        basic.showIcon(IconNames.No)
    }
}
radio.onReceivedString(function (receivedString) {
    toon_emoji(receivedString)
})
radio.setGroup(1)
