var display = document.getElementById("display");

//adding button value in display
function addValue(value) {
    if (display.value == "Invalid Input" ||
        display.value == "Cannot divide by zero" ||
        display.value == "Enter a number") {
        display.value = "";
    }

    display.value = display.value + value;
}

// Display clear
function clearDisplay() {
    display.value = "";
}

// calculation performance
function calculate() {

    if (display.value == "") {
        display.value = "Enter a number";
        return;
    }

    try {
        var result = eval(display.value);

        if (!isFinite(result)) {
            display.value = "Cannot divide by zero";
        } else {
            display.value = result;
        }
    }
    catch {
        display.value = "Invalid Input";
    }
}
