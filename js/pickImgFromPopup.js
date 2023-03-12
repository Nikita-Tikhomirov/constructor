function pickImgFromPopup() {
  const allImagesForPickArr = document.querySelectorAll('.popup-images__img-wrap img')
  allImagesForPickArr.forEach(item => {
    item.addEventListener('click', () => {
      createNewFrame(item.cloneNode(true))
      uploadPopup.classList.remove('active');
    })

  });
}

pickImgFromPopup()