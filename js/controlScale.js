function controlScaleFunction(newFrame, imageControls, imageScale, imageScaleWidth, imageScaleHeight) {
  imageScaleWidth.addEventListener('ondragstart', () => {return false})
  imageScaleWidth.addEventListener('mousedown',resize)
  imageScaleWidth.addEventListener('touchstart',resize)
  
  imageScaleHeight.addEventListener('ondragstart', () => {return false})
  imageScaleHeight.addEventListener('mousedown',resize)
  imageScaleHeight.addEventListener('touchstart',resize)
  
  imageScale.addEventListener('ondragstart', () => {return false})
  imageScale.addEventListener('mousedown',resize)
  imageScale.addEventListener('touchstart',resize)

  function resize(e) {
    const recImage = newFrame.getBoundingClientRect();
    const startImageWidth = recImage.width;
    const startImageHeight = recImage.height;
    const startX = e.clientX;
    const startY = e.clientY;
    const target = e.target;

    window.addEventListener('mousemove', scale);
    window.addEventListener('mouseup', () => {
      window.removeEventListener('mousemove', scale);
    }, {once: true});

    window.addEventListener('touchmove', scale);
    window.addEventListener('touchend', () => {
      window.removeEventListener('touchmove', scale);
    }, {once: true});

    function scale(e) {
      const x = startX - e.clientX;
      const y = startY - e.clientY;

      if (target === imageScaleWidth) {
        newSizes(startImageWidth - x, startImageHeight);
      } else if (target === imageScaleHeight) {
        newSizes(startImageWidth, startImageHeight - y);
      } else {
        newSizes(startImageWidth - y, startImageHeight - y);
      }
    }
  }

  function newSizes (width, height) {
    newFrame.style.width = `${width}px`
    newFrame.style.height = `${height}px`
  
    imageControls.style.width = `${width}px`
    imageControls.style.height = `${height}px`
  }
}


