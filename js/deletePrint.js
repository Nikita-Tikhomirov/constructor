function deletePrint(removeBtn, printWrap) {
  removeBtn.addEventListener('click', () => {
    removeBtn.parentElement.remove()
    printWrap.remove()
  })
}
