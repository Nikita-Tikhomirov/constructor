
function sidePicker() {
  const buttonFs = document.querySelector('.fsb')
  const buttonBs = document.querySelector('.bsb')
  const fSide = document.querySelector('.fs')
  const bSide = document.querySelector('.bs')

  function sideTriger(sideBtnOn, sideBtnOff, sideOn, sideOff) {
    sideBtnOn.addEventListener('click', () => {
      sideBtnOn.classList.add('active')
      sideBtnOff.classList.remove('active')
      sideOn.classList.add('active')
      sideOff.classList.remove('active')

      function whatSideNow(side) {
        if (side.classList.contains('active')) {
          sideNow = fSide
        } else {
          sideNow = bSide
        }
      }
      whatSideNow(fSide)
      console.log(sideNow)
    })

  }

  sideTriger(buttonFs, buttonBs, fSide, bSide)
  sideTriger(buttonBs, buttonFs, bSide, fSide)

}
sidePicker()

