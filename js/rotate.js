function rotate(whatRotate, btn) {
  const rect = whatRotate.getBoundingClientRect();
  const centerX = rect.left + (rect.width / 2);
  const centerY = rect.top + (rect.height / 2);

  const wrap = whatRotate.querySelector('.constructor__product-container-image-wrap');
  const innerFrameContainer = whatRotate.querySelector('.innerFrame__container');
  const image = document.querySelector(`#${whatRotate.getAttribute('data-count')}`)

  window.addEventListener("mousemove", rotation);
  window.addEventListener("touchmove", rotation);

  window.addEventListener("mouseup", stopRotation, {once: true});
  window.addEventListener("touchend", stopRotation, {once: true});
  
  if (btn) {
    btn.addEventListener("mouseup", stopRotation, {once: true});
  }

  function rotation(e) {
    const x = e.clientX || e.touches[0].clientX;
    const y = e.clientY || e.touches[0].clientY;

    const angle = (Math.atan2(y - centerY, x - centerX) + Math.PI/2) * (180 / Math.PI) + 20;
    whatRotate.style.setProperty('--rotate', `${angle}deg`);

    if (image) image.style.setProperty('--rotate', `${angle}deg`);
    if (wrap) wrap.style.setProperty('--rotate', `${-angle}deg`);
    if (innerFrameContainer) innerFrameContainer.style.setProperty('--rotate', `${-angle}deg`);
  }

  function stopRotation() {
    window.removeEventListener("mousemove", rotation);
    window.removeEventListener("touchmove", rotation);
  }
}
