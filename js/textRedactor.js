const addTextBtn = document.querySelector('.addtext_btn');

addTextBtn.addEventListener('click', () => {
  const textArea = document.createElement('div');
  textArea.classList.add('text-area');
  textArea.textContent = "Ваш текст";

  createNewFrame(textArea);
});

const colorPickerInput = document.querySelector('#foo');
const textInput = document.querySelector('#input-text');
const textFont = document.querySelector('#input-font');
const textStyle = document.querySelector('#input-style');

textFont.addEventListener('change', () => {
  const wrapId = document.querySelector('.image-controls.active').getAttribute('data-count');
  const wrap = document.querySelector(`#${wrapId}`);
  const textWrapNow = wrap.querySelector('.text-area');
  textWrapNow.style.fontSize = textFont.value;
})

textStyle.addEventListener('change', () => {
  const wrapId = document.querySelector('.image-controls.active').getAttribute('data-count');
  const wrap = document.querySelector(`#${wrapId}`);
  const textWrapNow = wrap.querySelector('.text-area');
  textWrapNow.style.fontFamily = textStyle.value;
})

textInput.addEventListener('input', () => {
  const wrapId = document.querySelector('.image-controls.active').getAttribute('data-count');
  const wrap = document.querySelector(`#${wrapId}`);
  const textWrapNow = wrap.querySelector('.text-area');
  textWrapNow.textContent = textInput.value;
})

colorPickerInput.addEventListener('change', () => {
  const colorPickerInputValue = colorPickerInput.getAttribute('data-current-color');
  const wrapId = document.querySelector('.image-controls.active').getAttribute('data-count');
  const wrap = document.querySelector(`#${wrapId}`);
  const textWrapNow = wrap.querySelector('.text-area');
  textWrapNow.style.color = colorPickerInputValue;
})