function pickImgFromPopup(sideNow) {
  const allImagesForPickArr = document.querySelectorAll('.popup-images__img-wrap img')
  allImagesForPickArr.forEach(item => {
    item.addEventListener('click', () => {
      createNewFrame(item.cloneNode(true), document.querySelector(sideNow))
      uploadPopup.classList.remove('active');
    })

  });
}