// function formatPickerStart() {
//   createFormatFrame('a3', sideNow)
//   priceCalculator(priceNow)
//   // const helperTextStart = 'Передвиньте зеленую рамку в ту область, где хотите расположить свой принт. Затем добавьте изображение, форму или текст'

//   // formatHelper(helperTextStart)

//   // const startFormat = sideNow.querySelector('.formatWrap.active')
//   // addPulseAnimation(startFormat)
// }

// // formatPickerStart()

// function formatPicker() {
//   let allFormatOnSide
//   allFormatOnSide = document.querySelectorAll('.constructor__menu-item-submenu li')

//   // console.log(sideNow)
//   function actionAfterClickFormat() {
//     allFormatOnSide.forEach(function (item, i, arr) {

//       item.addEventListener('click', () => {
//         let classToCreateFormatFrame = item.getAttribute('frameformat');
//         // Активный формат 
//         formatNow = classToCreateFormatFrame
//         createFormatFrame(classToCreateFormatFrame, sideNow);
//         leftSidebarBurger.classList.remove('active')
//         leftSidebar.classList.remove('active')
//         // add remove class from submenu
//       });
//     });
//   }
//   actionAfterClickFormat();

// }

// formatPicker()



// function createFormatFrame(formatClass, container, addFormatCounter) {

//   const activeFrameWrap = document.querySelector('.formatWrap.active');
//   if (activeFrameWrap) activeFrameWrap.classList.remove('active');

//   const formatWrap = document.createElement('div')
//   formatWrap.classList.add('formatWrap')
//   formatWrap.classList.add('active')
//   formatWrap.classList.add(formatNow)

//   if (formatNow == 'a3') {
//     formatWrap.setAttribute('format-price', '1000')
//   } else if (formatNow == 'a4v') {
//     formatWrap.setAttribute('format-price', '700')
//   } else {
//     formatWrap.setAttribute('format-price', '500')
//   }

//   const formatFrame = document.createElement('div');
//   formatFrame.classList.add('constructor__product-container-image-wrap', formatClass, 'active');

//   const formatContainer = document.createElement('div');
//   formatContainer.classList.add('formatWrap__container');

//   const formatInnerFrameContainer = document.createElement('div');
//   formatInnerFrameContainer.classList.add('innerFrame__container');

//   createControlsToFormat(formatWrap)
//   formatWrap.appendChild(formatContainer);
//   formatWrap.appendChild(formatInnerFrameContainer);
//   formatContainer.appendChild(formatFrame);
//   container.appendChild(formatWrap);
//   priceCalculator(priceNow)

//   // helper
//   if (addFormatCounter == 0 ) {
//     const helperTextStart = 'Передвиньте зеленую рамку(формат) в ту область, где хотите расположить свой принт. Затем добавьте изображение, форму или текст'
//     formatHelper(helperTextStart)
//   }else if(addFormatCounter == 1){
//     const helperTextStart = 'Для смены области редактирования(формата) нажмите на ту область, которую хотите выбрать'
//     formatHelper(helperTextStart)
//   }

//   const startFormat = sideNow.querySelector('.formatWrap.active')
//   addPulseAnimation(startFormat)

//   // addFormatCounter = addFormatCounter + 1
// }

// Удаление активного класса у соседей
// function deleteActiveClassFromSiblings(el, classTodel) {
//   let prevSibling = el.previousElementSibling;
//   let nextSibling = el.nextElementSibling;

//   while (prevSibling || nextSibling) {
//     if (prevSibling) {
//       if (prevSibling.classList.contains(classTodel)) {
//         prevSibling.classList.remove('active');
//       }
//       prevSibling = prevSibling.previousElementSibling;
//     }
//     if (nextSibling) {
//       if (nextSibling.classList.contains(classTodel)) {
//         nextSibling.classList.remove('active');
//       }
//       nextSibling = nextSibling.nextElementSibling;
//     }
//   }
// }
// Удаление активного класса у массива
// function removeActiveFromArr(arr) {
//   arr.forEach(function (e) {
//     e.classList.remove('active')
//   })
// }

// Добавить активыный класс элементу массива если он содержит нужный формат
// function addActiveIfFormatTheSame(arrToAddActive) {
//   arrToAddActive.forEach(function (item) {
//     if (item.classList.contains(formatNow)) {
//       item.classList.add('active')
//     }
//   })
// }

// function createControlsToFormat(formatFrame) {
//   // let moveFormatBtn = document.createElement('div')
//   // moveFormatBtn.classList.add('moveFormatBtn')
//   let closeFormatBtn = document.createElement('div')
//   closeFormatBtn.classList.add('closeFormatBtn')
//   let rotateFormatBtn = document.createElement('div')
//   rotateFormatBtn.classList.add('rotateFormatBtn')
//   rotateFormatBtn.setAttribute('draggable', 'false')
//   // formatFrame.appendChild(moveFormatBtn)
//   formatFrame.appendChild(closeFormatBtn)
//   formatFrame.appendChild(rotateFormatBtn)

//   rotateFormatBtn.addEventListener("ondragstart", () => {
//     return false
//   })

//   dragNdropFormat(formatFrame)
//   deleteFormatButton(closeFormatBtn)
//   startRotate(formatFrame, rotateFormatBtn)
// }

// function deleteFormatButton(buttonDelete) {
//   buttonDelete.addEventListener('click', () => {
//     buttonDelete.parentElement.remove()
//     priceCalculator(priceNow)
//   })
// }

// function startRotate(format, roatateBtn) {
//   roatateBtn.addEventListener("mousedown", () => {
//     rotate(format, roatateBtn)
//   });
//   roatateBtn.addEventListener("touchstart", () => {
//     rotate(format, roatateBtn)
//   });
// }