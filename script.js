var display = document.getElementById("display");

// Button ki value display mein add karna
function addValue(value) {
    if (display.value == "Invalid Input" ||
        display.value == "Cannot divide by zero" ||
        display.value == "Enter a number") {
        display.value = "";
    }

    display.value = display.value + value;
}

// Display clear karna
function clearDisplay() {
    display.value = "";
}

// Calculation perform karna
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
