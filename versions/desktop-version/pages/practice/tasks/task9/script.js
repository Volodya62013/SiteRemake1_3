function onCheck() {
    let l1 = document.getElementById("l1");
    let l2 = document.getElementById("l2");
    let l3 = document.getElementById("l3");
    let l4 = document.getElementById("l4");
    let l5 = document.getElementById("l5");
    let l6 = document.getElementById("l6");
    let l7 = document.getElementById("l7");
    let l8 = document.getElementById("l8");
    let l9 = document.getElementById("l9");

    let output = document.getElementById("outputik");

    if(l1.value == 'turtle.right(90)') {
        output.style = "color: greenyellow";
        output.innerHTML = "Правильно!";
    } else if(l1.value == "right(90)") {
        output.style = "color: greenyellow";
        output.innerHTML = "Правильно!";
    } else {
        output.style = "color: red";
        output.innerHTML = "Неправильно!";
    }
}