//  функция для попапов 
function popups(button, popup) {
  button.addEventListener('click', () => {
    popup.classList.add('active');
  });
}
popups(uploadPopupBtn, uploadPopup)


