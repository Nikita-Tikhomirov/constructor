const selectFontFamily = document.querySelector('#input-style')
console.log(selectFontFamily.value);

selectFontFamily.addEventListener('change', () => {
  selectFontFamily.style.fontFamily = selectFontFamily.value
})
