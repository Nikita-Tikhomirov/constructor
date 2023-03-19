const selectFontFamily = document.querySelector('#input-style')
console.log(selectFontFamily.value);
console.log(selectFontFamily);

selectFontFamily.addEventListener('change',()=>{
    selectFontFamily.style.fontFamily = selectFontFamily.value
})
