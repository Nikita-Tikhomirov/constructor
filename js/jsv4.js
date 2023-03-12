function formatPickerStart() {
  createFormatFrame('a3', sideNow)
  const formatButton = document.createElement('div')
  formatButton.classList.add('format-picker-button')
  formatButton.classList.add('active')
  formatButton.classList.add('a3')
  formatButton.setAttribute('format-buton', formatNow)
  formatButton.innerHTML = ('A3')
  sideNow.appendChild(formatButton)
}
formatPickerStart()

function formatPicker() {
  let allFormatOnSide
  if (sideNow.classList.contains('fs')) {
    allFormatOnSide = document.querySelectorAll('.product-format-fs .constructor__menu-item-submenu li')
  } else {
    allFormatOnSide = document.querySelectorAll('.product-format-bs .constructor__menu-item-submenu li')
  }

  console.log(allFormatOnSide)
  // console.log(sideNow)
  function actionAfterClickFormat() {
    allFormatOnSide.forEach(function (item, i, arr) {
      item.addEventListener('click', () => {
        let classToCreateFormatFrame = item.getAttribute('frameformat');
        // Активный формат 
        formatNow = classToCreateFormatFrame
        console.log(formatNow)
        let textToFormatControls = item.innerHTML;

        createFormatFrame(classToCreateFormatFrame, sideNow);
        addFormatButtonForBody(classToCreateFormatFrame, textToFormatControls);
      });
    });
  }
  actionAfterClickFormat();
}

formatPicker()

function createFormatFrame(formatClass, container) {
  function removeActivesBeforeCreate() {
    const allFramesWraps = document.querySelectorAll('.formatWrap')
    allFramesWraps.forEach(item => {
      item.classList.remove('active');
    })
  }
  removeActivesBeforeCreate()
  const formatWrap = document.createElement('div')
  formatWrap.classList.add('formatWrap')
  formatWrap.classList.add('active')
  formatWrap.classList.add(formatNow)

  const formatFrame = document.createElement('div');
  formatFrame.classList.add('constructor__product-container-image-wrap');
  formatFrame.classList.add(formatClass);
  formatFrame.classList.add('active');

  const formatContainer = document.createElement('div');
  formatContainer.classList.add('formatWrap__container');

  const formatInnerFrameContainer = document.createElement('div');
  formatInnerFrameContainer.classList.add('innerFrame__container');

  createControlsToFormat(formatWrap)
  formatWrap.appendChild(formatContainer);
  formatWrap.appendChild(formatInnerFrameContainer);
  formatContainer.appendChild(formatFrame);
  container.appendChild(formatWrap);

  formatWrap.addEventListener('click', () => {
    const allFramesWraps = document.querySelectorAll('.formatWrap')
    allFramesWraps.forEach(item => {
      item.classList.remove('active');
      formatWrap.classList.add('active');
    })
  })
}

// function addFormatButton(pickKlass, buttonText) {
//   const formatButton = document.createElement('div')
//   formatButton.classList.add('format-picker-button')
//   const formatButtons = sideNow.querySelectorAll('.format-picker-button');
//   formatButtons.forEach(function (button) {
//     button.classList.remove('active');
//   });

//   formatButton.classList.add('active')
//   formatButton.classList.add(pickKlass)
//   formatButton.setAttribute('format-buton', formatNow)
//   formatButton.innerHTML = buttonText
//   sideNow.appendChild(formatButton)
//   bottomfomatPicker()
// }

function addFormatButtonForBody(pickKlass, buttonText) {
  const formatButton = document.createElement('div')
  formatButton.classList.add('format-picker-button')
  const formatButtons = sideNow.querySelectorAll('.format-picker-button');

  formatButtons.forEach(function (button) {
    button.classList.remove('active');
    if (button.classList.contains('lh') || button.classList.contains('rh')) {
      console.log(12)
    } else {
      button.remove()
    }
  });

  formatButton.classList.add('active')
  formatButton.classList.add(pickKlass)
  formatButton.setAttribute('format-buton', formatNow)
  formatButton.innerHTML = buttonText
  sideNow.appendChild(formatButton)
  bottomfomatPicker()
}

function bottomfomatPicker() {
  let allBottomsButtonFormats = sideNow.querySelectorAll('.format-picker-button')
  allBottomsButtonFormats.forEach(function (item, i, arr) {
    item.addEventListener('click', () => {

      deleteActiveClassFromSiblings(item, 'format-picker-button')

      item.classList.add('active')
      // Смена формата по нажатию 
      formatNow = item.getAttribute('format-buton')

      // Удаляем активный класс у редакторов и форматов
      let allRedactors = sideNow.querySelectorAll('.image-controls')
      let allFormats = sideNow.querySelectorAll('.constructor__product-container-image-wrap')

      removeActiveFromArr(allRedactors)
      removeActiveFromArr(allFormats)
      // проверка на формат черз переменную

      addActiveIfFormatTheSame(allRedactors)
      addActiveIfFormatTheSame(allFormats)
    })
  })
}

// Удаление активного класса у соседей
function deleteActiveClassFromSiblings(el, classTodel) {
  let prevSibling = el.previousElementSibling;
  let nextSibling = el.nextElementSibling;

  while (prevSibling || nextSibling) {
    if (prevSibling) {
      if (prevSibling.classList.contains(classTodel)) {
        prevSibling.classList.remove('active');
      }
      prevSibling = prevSibling.previousElementSibling;
    }
    if (nextSibling) {
      if (nextSibling.classList.contains(classTodel)) {
        nextSibling.classList.remove('active');
      }
      nextSibling = nextSibling.nextElementSibling;
    }
  }
}
// Удаление активного класса у массива
function removeActiveFromArr(arr) {
  arr.forEach(function (e) {
    e.classList.remove('active')
  })
}

// Добавить активыный класс элементу массива если он содержит нужный формат
function addActiveIfFormatTheSame(arrToAddActive) {
  arrToAddActive.forEach(function (item) {
    if (item.classList.contains(formatNow)) {
      item.classList.add('active')
    }
  })
}

function createControlsToFormat(formatFrame) {
  // let moveFormatBtn = document.createElement('div')
  // moveFormatBtn.classList.add('moveFormatBtn')
  let closeFormatBtn = document.createElement('div')
  closeFormatBtn.classList.add('closeFormatBtn')
  let rotateFormatBtn = document.createElement('div')
  rotateFormatBtn.classList.add('rotateFormatBtn')
  rotateFormatBtn.setAttribute('draggable', 'false')
  // formatFrame.appendChild(moveFormatBtn)
  formatFrame.appendChild(closeFormatBtn)
  formatFrame.appendChild(rotateFormatBtn)

  dragNdropFormat(formatFrame)
  deleteFormatButton(closeFormatBtn)
  startRotate(formatFrame, rotateFormatBtn)
}

function deleteFormatButton(buttonDelete) {
  buttonDelete.addEventListener('click', () => {
    buttonDelete.parentElement.remove()
  })

}

function startRotate(format, roatateBtn) {
  roatateBtn.addEventListener("mousedown", () => {
    rotate(format, roatateBtn)
  });
  roatateBtn.addEventListener("touchstart", () => {
    rotate(format, roatateBtn)
  });
}


