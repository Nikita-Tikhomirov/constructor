const addTextBtn = document.querySelector('.addtext_btn');

const colorPickerInput = document.querySelector('#foo');
const textInput = document.querySelector('#input-text');
const textStyle = document.querySelector('#input-style');
const textFont = document.querySelector('#input-font');

const textCircleInput = document.querySelector('.input-circle');
const textCurvesUp = document.querySelector('#text-curves-up');
const textCurvesDown = document.querySelector('#text-curves-down');

// addTextBtn.addEventListener('click', () => {
//   const textArea = document.createElement('div');
//   textArea.classList.add('text-area');
//   textArea.style.color = "#FE4536";
//   colorPickerInput.setAttribute('data-swatchy-color','#FE4536');
//   colorPickerInput.setAttribute('value', '#FE4536')
//   colorPickerInput.setAttribute('style', 'background-color: #FE4536; color: #FE4536;')
//   textArea.textContent = "Ваш текст";
//   textArea.style.fontFamily = "Times New Roman";

//   createNewFrame(textArea);
// });

function selectTextColor(color) {
  const textWrapNow = getTextAreaVars();

  if (textWrapNow) {
    const svg = textWrapNow.querySelector('svg');

    textWrapNow.style.color = color;
    if (svg) svg.style.fill = color;
  }
}

textStyle.addEventListener('change', () => {
  const textWrapNow = getTextAreaVars()

  if (textWrapNow) textWrapNow.style.fontFamily = textStyle.value;
})

textInput.addEventListener('input', () => {
  const textWrapNow = getTextAreaVars()

  if (textWrapNow) {
    const svgText = textWrapNow.querySelector('textPath');

    if (svgText) {
      svgText.textContent = textInput.value;
    } else {
      textWrapNow.textContent = textInput.value;
      resizeControlFrame(textWrapNow)
    }
  }
})

textFont.addEventListener('input', () => {
  const textWrapNow = getTextAreaVars()

  if (textWrapNow) {
    textWrapNow.style.fontSize = textFont.value + 'px';
    resizeControlFrame(textWrapNow)
  }
})

textCircleInput.addEventListener('input', () => {
  const text = document.querySelector('.generated-img-wrap.active .text-area');

  if (text) {
    const path = text.querySelector('path');

    if (textCurvesUp.checked) path.setAttribute('d', `M0,50 a${50 - textCircleInput.value},${50 - textCircleInput.value} 0 1,0 0,-1z`)
    else if (textCurvesDown.checked) path.setAttribute('d', `M0,50 a${50 - textCircleInput.value},${50 - textCircleInput.value} 0 1,1 -1,1z`)
  }

  const textWrapNow = getTextAreaVars()

  if (textWrapNow) {
    resizeControlFrame(textWrapNow)
  }
})

textCurvesUp.addEventListener('change', () => {
  textCurvesDown.checked = textCurvesDown.checked ? false : textCurvesDown.checked;
  const text = document.querySelector('.generated-img-wrap.active .text-area');
  
  if (textCurvesUp.checked) {
    curvesText(text, 'up')
    const textWrapNow = getTextAreaVars()
    resizeControlFrame(textWrapNow)
  }
})

textCurvesDown.addEventListener('change', () => {
  textCurvesUp.checked = textCurvesUp.checked ? false : textCurvesUp.checked;
  const text = document.querySelector('.generated-img-wrap.active .text-area');
  
  if (textCurvesDown.checked) {
    curvesText(text, 'down')
    const textWrapNow = getTextAreaVars()
    resizeControlFrame(textWrapNow)
  }
})

function getTextAreaVars() {
  const activeEl = document.querySelector('.image-controls.active');

  if (activeEl) {
    const wrapId = activeEl.getAttribute('data-count');
    const wrap = document.querySelector(`#${wrapId}`);
    const textWrapNow = wrap.querySelector('.text-area');
    return textWrapNow
  }
}


function resizeControlFrame(textWrapNow) {
  const frame = document.querySelector('.image-controls.active');

  if (frame) {
    frame.style.width = textWrapNow.getBoundingClientRect().width + 'px';
    frame.style.height = textWrapNow.getBoundingClientRect().height + 'px';
  }
}

function curvesText (el, curves) {
  if (el) {
    const NS = "http://www.w3.org/2000/svg";
    const xlinkNS = "http://www.w3.org/1999/xlink";

    const svg = document.createElementNS(NS, "svg");
    const circle = document.createElementNS(NS, "path");
    const text = document.createElementNS(NS, "text");
    const textPath = document.createElementNS(NS, "textPath");

    svg.setAttribute("viewBox", "0 0 100 100");
    svg.style.fill = 'red';

    textPath.setAttributeNS(xlinkNS, "xlink:href", "#circle");
    circle.setAttribute("id", "circle");

    if (curves === 'up') circle.setAttribute("d", "M0,50 a50,50 0 1,0 0,-1z");
    else if (curves === 'down') circle.setAttribute("d", "M0,50 a50,50 0 1,1 -1,1z");

    text.appendChild(textPath);
    svg.appendChild(circle);
    svg.appendChild(text);

    textPath.textContent = el.textContent;
    el.textContent = "";
    el.appendChild(svg);
  }
}