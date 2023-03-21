const addTextBtn = document.querySelector('.addtext_btn');

addTextBtn.addEventListener('click', () => {
  const textArea = document.createElement('div');
  textArea.classList.add('text-area');
  textArea.style.color = "#FE4536"
  colorPickerInput.value = "#FE4536"
  textArea.textContent = "Ваш текст";
  textArea.style.fontFamily = "Times New Roman"

  createNewFrame(textArea);
});

const colorPickerInput = document.querySelector('#foo');
const textInput = document.querySelector('#input-text');
const textStyle = document.querySelector('#input-style');
const textFont = document.querySelector('#input-font');
const textCircleInput = document.querySelector('.input-circle');

colorPickerInput.addEventListener('input', () => {
  const colorPickerInputValue = colorPickerInput.value;
  const textWrapNow = getTextAreaVars()
  textWrapNow.style.color = colorPickerInputValue;
})

textStyle.addEventListener('change', () => {
  const textWrapNow = getTextAreaVars()
  textWrapNow.style.fontFamily = textStyle.value;
})

textInput.addEventListener('input', () => {
  const textWrapNow = getTextAreaVars()
  textWrapNow.textContent = textInput.value;
  resizeControlFrame(textWrapNow)

})

textFont.addEventListener('input', () => {
  const textWrapNow = getTextAreaVars()
  textWrapNow.style.fontSize = textFont.value + 'px';
  resizeControlFrame(textWrapNow)
})

function getTextAreaVars() {
  const wrapId = document.querySelector('.image-controls.active').getAttribute('data-count');
  const wrap = document.querySelector(`#${wrapId}`);
  const textWrapNow = wrap.querySelector('.text-area');
  return textWrapNow
}


function resizeControlFrame(textWrapNow) {
  const frame = document.querySelector('.image-controls.active');
  frame.style.width = textWrapNow.getBoundingClientRect().width + 'px';
  frame.style.height = textWrapNow.getBoundingClientRect().height + 'px';

}

// textCircleInput.addEventListener('input', () => {
//   const textWrapNow = getTextAreaVars()
//   new CircleType(textWrapNow).radius(textCircleInput.value);

//   resizeControlFrame(textWrapNow)

// })