input.onButtonPressed(Button.A, function () {
    music.stopMelody(MelodyStopOptions.All)
    strip.clear()
    music.stopAllSounds()
    basic.clearScreen()
})
let strip: neopixel.Strip = null
basic.showIcon(IconNames.Happy)
basic.pause(100)
strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
basic.forever(function () {
    if (input.lightLevel() < 5) {
        basic.showString("GET OUT!!!")
        basic.showIcon(IconNames.Angry)
        for (let index = 0; index < 4; index++) {
            music.playMelody("D C D C D C D C ", 500)
        }
        for (let index = 0; index < 8; index++) {
            for (let index = 0; index <= 3; index++) {
                strip.setPixelColor(index, neopixel.rgb(64, 0, 0))
                strip.show()
                basic.pause(100)
            }
            for (let index = 0; index <= 3; index++) {
                strip.setPixelColor(index, neopixel.rgb(64, 64, 64))
                strip.show()
                basic.pause(100)
            }
            for (let index = 0; index <= 3; index++) {
                strip.setPixelColor(index, neopixel.rgb(64, 0, 20))
                strip.show()
                basic.pause(100)
            }
            for (let index = 0; index < 4; index++) {
                music.playMelody("D C D C D C D C ", 500)
            }
        }
    }
})
