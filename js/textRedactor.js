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
const textFont = document.querySelector('#input-font');
const textStyle = document.querySelector('#input-style');

textFont.addEventListener('input', () => {
  const wrapId = document.querySelector('.image-controls.active').getAttribute('data-count');
  const wrap = document.querySelector(`#${wrapId}`);
  const textWrapNow = wrap.querySelector('.text-area');
  textWrapNow.style.fontSize = textFont.value + 'px';
})

textStyle.addEventListener('change', () => {
  const wrapId = document.querySelector('.image-controls.active').getAttribute('data-count');
  const wrap = document.querySelector(`#${wrapId}`);
  const textWrapNow = wrap.querySelector('.text-area');
  textWrapNow.style.fontFamily = textStyle.value;
})

textInput.addEventListener('input', () => {
  const frame = document.querySelector('.image-controls.active');
  const element = document.querySelector('.image-controls.active');
  const wrapId = element.getAttribute('data-count');
  const wrap = document.querySelector(`#${wrapId}`);
  const textWrapNow = wrap.querySelector('.text-area');
  textWrapNow.textContent = textInput.value;

  frame.style.width = textWrapNow.getBoundingClientRect().width + 'px';
  frame.style.height = textWrapNow.getBoundingClientRect().height + 'px';
})

colorPickerInput.addEventListener('input', () => {
  const colorPickerInputValue = colorPickerInput.value;
  const wrapId = document.querySelector('.image-controls.active').getAttribute('data-count');
  const wrap = document.querySelector(`#${wrapId}`);
  const textWrapNow = wrap.querySelector('.text-area');
  textWrapNow.style.color = colorPickerInputValue;
})


