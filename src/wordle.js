const firstCell = document.querySelector('.input-zone input');
const allInputs = document.querySelectorAll('.input-zone input');

document.addEventListener('DOMContentLoaded', () => {
    firstCell.focus();
})

Array.from(allInputs).forEach((input) => {
    input.setAttribute('pattern', '[א-ת]');
    addEventListener('oninput', () =>{
        console.log(input.innerHTML);
    })
});