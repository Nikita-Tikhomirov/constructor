function controlScaleFunction(newFrame, imageControls, imageScale, imageScaleWidth, imageScaleHeight) {
  imageScaleWidth.addEventListener('ondragstart', () => {return false})
  imageScaleWidth.addEventListener('mousedown', resize)
  imageScaleWidth.addEventListener('touchstart', resize)

  imageScaleHeight.addEventListener('ondragstart', () => {return false})
  imageScaleHeight.addEventListener('mousedown', resize)
  imageScaleHeight.addEventListener('touchstart', resize)

  imageScale.addEventListener('ondragstart', () => {return false})
  imageScale.addEventListener('mousedown', resize)
  imageScale.addEventListener('touchstart', resize)

  function resize(event) {
    const target = event.target;

    const initX = newFrame.offsetLeft;
    const initY = newFrame.offsetTop;
    let startX;
    let startY;

    if (event.touches) {
      startX = event.touches[0].clientX;
      startY = event.touches[0].clientY;
    } else {
      startX = event.clientX;
      startY = event.clientY;
    }

    const initW = newFrame.offsetWidth;
    const initH = newFrame.offsetHeight;

    const initRotate = getCurrentRotation(newFrame);
    const initRadians = initRotate * Math.PI / 180;
    const cosFraction = Math.cos(initRadians);
    const sinFraction = Math.sin(initRadians);


    window.addEventListener('mousemove', scale);
    window.addEventListener('mouseup', () => {
      window.removeEventListener('mousemove', scale);
    }, {
      once: true
    });

    window.addEventListener('touchmove', scale);
    window.addEventListener('touchend', () => {
      window.removeEventListener('touchmove', scale);
    }, {
      once: true
    });

    function scale(e) {
      let wDiff;
      let hDiff;

      if (e.touches) {
        wDiff = startX - e.touches[0].clientX;
        hDiff = startY - e.touches[0].clientY;
      } else {
        wDiff = startX - e.clientX;
        hDiff = startY - e.clientY;
      }

      const rotatedWDiff = cosFraction * wDiff + sinFraction * hDiff;
      const rotatedHDiff = cosFraction * hDiff - sinFraction * wDiff;

      let newW = initW, newH = initH, newX = initX, newY = initY;
      newW = initW - rotatedWDiff;
      newH = initH - rotatedHDiff;

      if (target === imageScaleWidth) {
        newX -= 0.5 * rotatedWDiff * cosFraction / 6;
        newY += 0.5 * rotatedWDiff * sinFraction / 6;

        newSizes(newW, initH);
        // newPosition(newX, newY);
      } else if (target === imageScaleHeight) {
        newX -= 0.5 * rotatedHDiff * cosFraction / 6;
        newY += 0.5 * rotatedHDiff * sinFraction / 6;

        newSizes(initW, newH);
        // newPosition(newY, newX);
      } else {
        const scale = Math.max(newW/initW, newH/initH);
        newW = scale * initW;
        newH = scale * initH;
        newSizes(newW, newH);
      }
    }
  }

  function newSizes(width, height) {
    newFrame.style.width = `${width}px`
    newFrame.style.height = `${height}px`

    imageControls.style.width = `${width}px`
    imageControls.style.height = `${height}px`
  }

  function newPosition(width, height) {
    newFrame.style.left = `${width}px`
    newFrame.style.top = `${height}px`

    imageControls.style.left = `${width}px`
    imageControls.style.top = `${height}px`
  }
}

function getCurrentRotation(el) {
  var st = window.getComputedStyle(el, null);
  var tm = st.getPropertyValue("-webkit-transform") ||
    st.getPropertyValue("-moz-transform") ||
    st.getPropertyValue("-ms-transform") ||
    st.getPropertyValue("-o-transform") ||
    st.getPropertyValue("transform")
  "none";
  if (tm != "none") {
    var values = tm.split('(')[1].split(')')[0].split(',');
    var angle = Math.round(Math.atan2(values[1], values[0]) * (180 / Math.PI));
    return (angle < 0 ? angle + 360 : angle);
  }
  return 0;
}