let resistor = 0
microIoT.microIoT_initDisplay()
basic.showIcon(IconNames.SmallHeart)
basic.forever(function () {
    resistor = 0
    if (pins.analogReadPin(AnalogReadWritePin.P2) != 255) {
        resistor = pins.analogReadPin(AnalogReadWritePin.P2)
        microIoT.microIoT_showUserNumber(4, resistor)
    }
    if (resistor > 400) {
        microIoT.microIoT_setIndexColor(PIN.P15, 0, 0, 0xffff00)
    } else if (resistor > 250) {
        microIoT.microIoT_setIndexColor(PIN.P15, 0, 1, 0xff8000)
    } else {
        microIoT.microIoT_setIndexColor(PIN.P15, 0, 2, 0xff0080)
    }
})
