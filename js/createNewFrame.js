function createNewFrame(img) {
  const format = sideNow.querySelector('.formatWrap.active');
  const container = format.querySelector('.constructor__product-container-image-wrap');
  const formatInner = format.querySelector('.innerFrame__container');
  const count = sideNow.querySelectorAll('.generated-img-wrap').length;

  const activeFrameWrap = document.querySelector('.image-controls.active');
  if (activeFrameWrap) activeFrameWrap.classList.remove('active');

  const newFrame = document.createElement('div');
  newFrame.classList.add('generated-img-wrap');
  newFrame.id = `count_${count}`
  newFrame.classList.add(formatNow);

  newFrame.appendChild(img)
  container.appendChild(newFrame)

  const imageControls = document.createElement('div');

  const imageRemove = document.createElement('div');
  const imageRotate = document.createElement('div');
  const imageScale = document.createElement('div');
  const imageScaleWidth = document.createElement('div');
  const imageScaleHeight = document.createElement('div');


  imageScaleWidth.classList.add('image-scaleWidth')
  imageScaleHeight.classList.add('image-scaleHeight')

  imageControls.classList.add('image-controls');
  imageControls.setAttribute('data-count', `count_${count}`)
  imageControls.classList.add('active');
  imageControls.classList.add(formatNow);
  imageRemove.classList.add('image-remove');
  imageRotate.classList.add('image-rotate');
  imageScale.classList.add('image-scale');
  imageControls.appendChild(imageRemove);

  // Удаление рамкки и блока с текстом
  deletePrint(imageRemove, newFrame)

  imageControls.appendChild(imageRotate);
  imageControls.appendChild(imageScale);
  imageControls.appendChild(imageScaleHeight);
  imageControls.appendChild(imageScaleWidth);

  const containerForControls = formatInner;

  containerForControls.appendChild(imageControls)
  setTimeout(() => {
    imageControls.style.width = newFrame.offsetWidth + 'px';
    imageControls.style.height = newFrame.offsetHeight + 'px';
  },100)

  imageControls.addEventListener('mousedown', () => {
    const imagesInside = container.querySelector('.generated-img-wrap.active');
    if (imagesInside) imagesInside.classList.remove('active');
    newFrame.classList.add('active');
  })

  dragNdropFormat(imageControls);
  controlScaleFunction(newFrame, imageControls, imageScale, imageScaleWidth, imageScaleHeight);

  imageRotate.addEventListener("ondragstart", () => {return false});
  imageRotate.addEventListener("mousedown", () => {
    rotate(imageControls, imageRotate)
  });
  imageRotate.addEventListener("touchstart", () => {
    rotate(imageControls, imageRotate)
  });

}

