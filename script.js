// Stores the latest converted value
let lastAnswer = "";
 
function convertNumber() {

    let number = document.getElementById("numberInput").value.trim();

    let fromBase = Number(document.getElementById("fromBase").value);

    let toBase = Number(document.getElementById("toBase").value);

    if (number === "") {

        document.getElementById("result").innerHTML = "Please enter a value";

        document.querySelector(".copy-btn").style.display = "none";

        return;

    }

    let decimal = parseInt(number, fromBase);

    if (isNaN(decimal)) {

        document.getElementById("result").innerHTML = "Invalid Input";

        document.querySelector(".copy-btn").style.display = "none";

        return;

    }

    lastAnswer = decimal.toString(toBase).toUpperCase();

    document.getElementById("result").innerHTML =
        "Result : " + lastAnswer;

    document.querySelector(".copy-btn").style.display = "block";

}

function swapBases() {

    let from = document.getElementById("fromBase");

    let to = document.getElementById("toBase");

    let temp = from.value;

    from.value = to.value;

    to.value = temp;

    resetResult();

}

function copyResult() {

    navigator.clipboard.writeText(lastAnswer);

    let button = document.querySelector(".copy-btn");

    button.innerHTML = "✅ Copied!";

    button.style.background = "#16a34a";

    setTimeout(function () {

        button.innerHTML = "📋 Copy";

        button.style.background = "#10b981";

    }, 2000);

}

function resetResult() {

    document.getElementById("result").innerHTML =
        "Result will appear here";

    document.querySelector(".copy-btn").style.display = "none";

    lastAnswer = "";

}

function resetConverter() {

    document.getElementById("numberInput").value = "";

    document.getElementById("fromBase").value = "10";

    document.getElementById("toBase").value = "2";

    resetResult();

}

function handleEnter(event) {

    if (event.key === "Enter") {

        convertNumber();

    }

}

// Hide Copy button when page loads
document.querySelector(".copy-btn").style.display = "none";
