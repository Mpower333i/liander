let Item = neopixel.create(DigitalPin.P5, 18, NeoPixelMode.RGB_RGB)
Item.showRainbow(1, 360)
basic.forever(function () {
    Item.show()
    Item.rotate(1)
    basic.pause(100)
})
basic.forever(function () {
    kBit.ledBrightness(100)
    kBit.led(KBitColor.Blue)
    basic.showIcon(IconNames.Ghost)
    basic.showString("LIANDER")
    basic.pause(100)
})
basic.forever(function () {
    if (kBit.lineTracking() == 1) {
        kBit.run(KBitDir.TurnRight, 45)
    } else if (kBit.lineTracking() == 2) {
        kBit.run(KBitDir.TurnLeft, 45)
    } else if (kBit.lineTracking() == 3) {
        kBit.run(KBitDir.RunForward, 41)
    } else {
        kBit.carStop()
    }
})
