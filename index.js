let ansField = document.getElementById("ans");
let nums=[];
let operators=[];

function clear_btn() {
    ansField.innerText = ansField.innerText.slice(0, -1)
    if (ansField.innerText.length == 0) {
        ansField.innerText = "0";
    }
}

function clear_all_btn() {
    ansField.innerText = "0"
}

function nos(event) {
    if (ansField.innerText == "0") {
        ansField.innerText = event.target.innerText;
    } else {
        ansField.innerText += event.target.innerText;
    }
}

function operate(event) {
    let txt = ansField.innerText[ansField.innerText.length-1];
    if (txt === "X" || txt === "-" || txt === "/" || txt === "%" || txt === "+") {
        ansField.innerText = ansField.innerText.slice(0, -1);
    }
    ansField.innerText += event.target.innerText;
}

function equals() {
    let txt = ansField.innerText.replace('X', '*');
    let ans = eval(txt);
    ansField.innerText = ans;
}

let operatorsList = ["modulo", "divide", "multiply", "subtract", "addition"]
for (let i = 0; i < 10; i++) {
    document.getElementById("n"+i).addEventListener("click", nos);
}
document.getElementById("point").addEventListener("click", nos);

for (let i = 0; i < operatorsList.length; i++) {
    document.getElementById(operatorsList[i]).addEventListener("click", operate);
}