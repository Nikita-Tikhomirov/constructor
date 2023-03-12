function closeAllPopups() {
  allPopups.forEach(function (item, i, arr) {
    item.classList.remove('active')
  })
}
