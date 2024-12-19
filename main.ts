let resistor = 0
let photo = 0
microIoT.microIoT_initDisplay()
basic.showIcon(IconNames.SmallHeart)
basic.forever(function () {
    microIoT.microIoT_showUserNumber(0, Math.trunc(input.lightLevel()))
    photo = 0
    for (let index = 0; index < 254; index++) {
        photo += 1
        pins.analogWritePin(AnalogPin.P2, photo)
        microIoT.microIoT_showUserNumber(2, photo)
        if (pins.analogReadPin(AnalogReadWritePin.P0) != 255) {
            resistor = pins.analogReadPin(AnalogReadWritePin.P0)
            microIoT.microIoT_showUserNumber(4, resistor)
        }
        if (photo < 72) {
            microIoT.microIoT_setIndexColor(PIN.P15, 0, 0, 0xffff00)
        } else if (photo < 144) {
            microIoT.microIoT_setIndexColor(PIN.P15, 0, 1, 0xff8000)
        } else {
            microIoT.microIoT_setIndexColor(PIN.P15, 0, 2, 0x7f00ff)
        }
    }
})
