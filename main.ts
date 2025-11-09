let Right_Temp = 0
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.temperature())
    Right_Temp += 1
    basic.clearScreen()
    if (input.temperature() == Right_Temp) {
    	
    } else {
    	
    }
})
