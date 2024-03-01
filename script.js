var enhanceX2 = document.getElementById("enhanceX2");
var enhanceX3 = document.getElementById("enhanceX3");
var enhanceX4 = document.getElementById("enhanceX4");

var radioTwo = document.getElementById("radioTwo");
var radioThree = document.getElementById("radioThree");
var radioFour = document.getElementById("radioFour");

var prevSelectedZoom = radioThree; // Pretend the value is from cookies/last enhancement level user selected
setRadioButton(prevSelectedZoom);

document.getElementById("downloadButton").addEventListener("click", print);
document.getElementById("previewButton").addEventListener("click", print);

enhanceX2.addEventListener("click", function() { setRadioButton(radioTwo); });
enhanceX3.addEventListener("click", function() { setRadioButton(radioThree); });
enhanceX4.addEventListener("click", function() { setRadioButton(radioFour); });

document.querySelectorAll('input[name="enhanceLevel"]').forEach((elem) => {
    elem.addEventListener("change", function(event) {
        console.log(event);
    });
});

function print() {
    console.log("hello worlddd");
}

function setRadioButton(radioInput) {
    radioInput.checked = true;
}

function changeSelectedColor(radioInput, buttonInput) {
    console.log("hai");
    if(radioInput.checked) {
        buttonInput.style.color = "red";
    }
    else {
        buttonInput.style.color = "blue";

    }
}