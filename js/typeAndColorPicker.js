const typeBtn = document.querySelector('.product-type')
const typePopup = document.querySelector('.product-type-popup')

popups(typeBtn, typePopup)

const typeColorBtn = document.querySelector('.product-color')
typeColorBtn.addEventListener('click', () => {
  colorPicker()
})



function typePicker() {
  const allTypesArr = document.querySelectorAll('.product-type-popup__card')
  allTypesArr.forEach(function (item, i, arr) {
    item.addEventListener('click', () => {
      const chosenType = item.querySelector('.product-type-popup__title').innerText
      item.parentElement.classList.remove('active')
      typeOfProdNow = chosenType
      console.log(typeOfProdNow)

      let bgFrontSideNow = item.querySelector('.typedFs').innerText
      let bgBuckideNow = item.querySelector('.typedBs').innerText
      document.querySelector('.fs').style = bgFrontSideNow
      document.querySelector('.bs').style = bgBuckideNow
      // thisIsTshirtNow()
      addToBreadcrumbs(braedCrumbsType,chosenType)
      // braedCrumbsType.innerHTML = chosenType
      braedCrumbsColor.innerHTML = 'Черный' 

    })
  })
}




function colorPicker() {
  let typeColorPopup

  if (typeOfProdNow.includes('Футболка')) {
    typeColorPopup = document.querySelector('.product-color-popup__tshirts')
  } else if (typeOfProdNow.includes('Толстовка')) {
    typeColorPopup = document.querySelector('.product-color-popup__hoodys')
  } else if (typeOfProdNow.includes('Свитшот')) {
    typeColorPopup = document.querySelector('.product-color-popup__sweetshots')
  }

  let allColorsFromPopup = typeColorPopup.querySelectorAll('.product-color-popup__card')
  typeColorPopup.classList.add('active')

  allColorsFromPopup.forEach(function (item, i, arr) {
    item.addEventListener('click', () => {
      item.parentElement.classList.remove('active')
      let bgFrontSideNow = item.querySelector('.coloredFs').innerText
      let bgBuckideNow = item.querySelector('.coloredBs').innerText
      document.querySelector('.fs').style = bgFrontSideNow
      document.querySelector('.bs').style = bgBuckideNow

      let colorNow = item.querySelector('.product-color-popup__title').innerHTML
      addToBreadcrumbs(braedCrumbsColor,colorNow)

    })
  })
}

typePicker()


function addToBreadcrumbs(crumb,value){
  crumb.innerHTML = value
}