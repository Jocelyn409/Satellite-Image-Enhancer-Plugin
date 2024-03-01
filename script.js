window.onload = function() {
    var enhanceX2 = document.getElementById("enhanceX2");
    var enhanceX3 = document.getElementById("enhanceX3");
    var enhanceX4 = document.getElementById("enhanceX4");
    var radioTwo = document.getElementById("radioTwo");
    var radioThree = document.getElementById("radioThree");
    var radioFour = document.getElementById("radioFour");

    chrome.storage.sync.get(["radioSetting", "buttonSetting"]).then((result) => {
        console.log("Value is " + result.radioSetting + " and " + result.buttonSetting);
        if(!result.radioSetting || !result.buttonSetting) {
            setRadioButton(radioThree, 3);
        }
        else {
            setRadioButton(result.radioSetting, result.buttonSetting);
        }
    });
    
    document.getElementById("downloadButton").addEventListener("click", print);
    document.getElementById("previewButton").addEventListener("click", print);
    
    enhanceX2.addEventListener("click", function() { setRadioButton(radioTwo, 2); });
    enhanceX3.addEventListener("click", function() { setRadioButton(radioThree, 3); });
    enhanceX4.addEventListener("click", function() { setRadioButton(radioFour, 4); });
}

function print() {
    console.log("hello worlddd");
}

function setRadioButton(radioInput, buttonInput) {
    radioInput.checked = true;
    enhanceX2.style.color = "wheat";
    enhanceX3.style.color = "wheat";
    enhanceX4.style.color = "wheat";
    enhanceX2.style.border = "5px outset black";
    enhanceX3.style.border = "5px outset black";
    enhanceX4.style.border = "5px outset black";
    
    switch(buttonInput) {
        case 2: enhanceX2.style.border = "5px inset orange";
        chrome.storage.sync.set({ radioSetting: "radioTwo", buttonSetting: 2 }).then(() => {
            console.log("Value is set");
        });
        break;
        case 3: enhanceX3.style.border = "5px inset orange";
        chrome.storage.sync.set({ radioSetting: "radioThree", buttonSetting: 3 }).then(() => {
            console.log("Value is set");
        });
        break;
        case 4: enhanceX4.style.border = "5px inset orange";
        chrome.storage.sync.set({ radioSetting: "radioFour", buttonSetting: 4 }).then(() => {
            console.log("Value is set");
        });
        break;
    }
    
}

// send currently selected enhance level to storage
console.log("hai!!! :3");
