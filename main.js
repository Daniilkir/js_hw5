// 1
const buttonOpen = document.querySelector(".open-modal")
const buttonClose = document.querySelector(".close-button")
const backdrop = document.querySelector(".backdrop")
const body = document.querySelector("body")

buttonOpen.addEventListener("click", ()=> {
    
    backdrop.classList.toggle("backdrop")
})

buttonClose.addEventListener("click", ()=> {

    backdrop.classList.toggle("backdrop")
})

2

const redColor = document.querySelector(".red")
const whiteColor = document.querySelector(".white")
const greenColor = document.querySelector(".green")

redColor.addEventListener("click", ()=> {
    document.body.style.backgroundColor = "red"
})

whiteColor.addEventListener("click", ()=> {
    document.body.style.backgroundColor = "white"
})

greenColor.addEventListener("click", ()=> {
    document.body.style.backgroundColor = "green"
})

//3

const nameInput = document.querySelector("#name-input")
const nameOutput = document.querySelector("#name-output")


nameInput.addEventListener("input", ()=> {
    const name = nameInput.value
    if (name.trim() === '') {
        nameOutput.textContent = "stranger"
    } else {
        nameOutput.textContent = name
    }
})

//4

document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('my-input');

    input.addEventListener('blur', function() {
      const inputValue = input.value.trim();
      const requiredLength = parseInt(input.getAttribute('data-length'));

      if (inputValue.length === requiredLength) {
        input.classList.remove('invalid-input');
        input.classList.add('valid-input');
      } else {
        input.classList.remove('valid-input');
        input.classList.add('invalid-input');
      }
    });
  });
  
// 5
const fontSizeControl = document.getElementById('font-size-control');
const text = document.getElementById('text');

fontSizeControl.addEventListener('input', function() {
  const fontSize = fontSizeControl.value + 'px';
  text.style.fontSize = fontSize;
});
