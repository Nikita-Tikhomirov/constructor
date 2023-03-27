function closeAllPopups() {
  allPopups.forEach(function (item, i, arr) {
    item.classList.remove('active')
    
  })
}


allButtonsClosePopups.forEach(element => {
  element.addEventListener('click',()=>{
    closeAllPopups()
  })
});