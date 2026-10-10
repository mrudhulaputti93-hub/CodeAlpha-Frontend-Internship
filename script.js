let display = document.getElementById("display");


/* Add value to display */

function addValue(value) {

    display.value += value;

}


/* Clear display */

function clearDisplay() {

    display.value = "";

}


/* Delete last character */

function deleteLast() {

    display.value =
        display.value.slice(0, -1);

}


/* Calculate result */

function calculate() {

    try {

        if (display.value === "") {
            return;
        }

        display.value =
            eval(display.value);

    }

    catch {

        display.value = "Error";

    }

}


/* Keyboard Support */

document.addEventListener("keydown", function(event) {

    if (
        (event.key >= "0" && event.key <= "9") ||
        "+-*/.%".includes(event.key)
    ) {

        addValue(event.key);

    }


    if (event.key === "Enter") {

        calculate();

    }


    if (event.key === "Backspace") {

        deleteLast();

    }


    if (event.key === "Escape") {

        clearDisplay();

    }

});