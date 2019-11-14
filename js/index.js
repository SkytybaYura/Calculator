const display = document.querySelector('.calc .display');
document.querySelectorAll('.digits button, .opers button')
    .forEach(button => button.addEventListener('click', digitOperPressed));

function digitOperPressed(event) {
    const btnText = event.target.innerText;
    display.value += btnText;
}

document.querySelector('.calc .eq')
    .addEventListener('click', eqPressed);

function eqPressed() {
    display.value = eval(display.value);
}
document.querySelector('.calc .clearOne')
    .addEventListener('click', clearLast);
function clearLast() {
    const num = display.value;
    display.value = num.slice(0, -1);
}
document.querySelector('.calc .clear')
    .addEventListener('click', clearAll);
function clearAll(){
    const number = display.value;
    display.value = number.value ="";
}
