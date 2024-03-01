window.onload = function() {
    document.getElementById("downloadButton").addEventListener("click", print);
    document.getElementById("previewButton").addEventListener("click", print);
    document.getElementById("previewButton").addEventListener("click", setRadioButton);
}

function print() {
    console.log("hello wordlddd");
}

function setRadioButton() {
    // Find the radio button with the specified ID
    var radioButton = document.getElementById("two");

    // Check the radio button
    radioButton.checked = true;
    console.log(radioButton.checked);
}