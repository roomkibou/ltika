input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
})
basic.showString("L tika")
pins.digitalWritePin(DigitalPin.P0, 1)
basic.pause(200)
pins.digitalWritePin(DigitalPin.P0, 0)
basic.forever(function () {
	
})
