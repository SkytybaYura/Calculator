const display = document.querySelector('.calc .display');
document.querySelectorAll('.digits button, .opers button')
    .forEach(button => button.addEventListener('click', digitOperPressed));

function digitOperPressed(event) {
    const btnText = event.target.innerText;
    display.value += btnText;
}
document.querySelector('.calc .opers')
    .addEventListener('click', oneClick);
function oneClick() {
    if (display.value === opers.length) {
        const oneClikOpers = display.value;
        display.value = oneClikOpers.;
    }
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
function clearAll() {
    const num = display.value;
    display.value = num.value = "";
}
document.querySelector('.calc .percent')
    .addEventListener('click', percentNumber);
function percentNumber() {
    const num = display.value;
    display.value = num / 100;
}
document.querySelector('.calc .sqrt')
    .addEventListener('click', sqrtNumber);
function sqrtNumber() {
    const num = display.value;
    display.value = Math.sqrt(num);
}
document.querySelector('.calc .exp')
    .addEventListener('click', expNumber);
function expNumber() {
    const num = display.value;
    display.value = Math.exp(num);
}