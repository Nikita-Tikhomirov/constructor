function createNewFrame(img) {
  const format = sideNow.querySelector('.formatWrap.active');
  const container = format.querySelector('.constructor__product-container-image-wrap');
  const formatInner = format.querySelector('.innerFrame__container');
  const count = sideNow.querySelectorAll('.generated-img-wrap').length;

  const activeFrameWrap = document.querySelector('.image-controls.active');
  if (activeFrameWrap) activeFrameWrap.classList.remove('active');

  const newFrame = document.createElement('div');
  newFrame.classList.add('generated-img-wrap', formatNow);
  newFrame.id = `count_${count}`

  const svgWrapToImage = document.createElement('svg')
  // svgWrapToImage.setAttribute('viewBox', '0 0 100 100')
  const svgFilter = document.createElement('filter')
  svgFilter.setAttribute('color-interpolation-filters', 'sRGB')
  svgFilter.setAttribute('id', 'colorTransformFilter')
  svgWrapToImage.appendChild(svgFilter)

  const filterColormatrix = document.createElement('feColorMatrix')
  filterColormatrix.setAttribute('in', 'SourceGraphic')
  filterColormatrix.setAttribute('type', 'matrix')
  filterColormatrix.setAttribute(
    'values',
    `1 0 0 0 0 
  0 1 0 0 0
  0 0 1 0 0
  0 0 0 1 0`)
  svgFilter.appendChild(filterColormatrix)
  // img to image converter
  const imageTosvg = document.createElement('image')
  const imagePath = img.src


  imageTosvg.setAttribute('xlink:href', imagePath)
  imageTosvg.setAttribute('filter', 'colorTransformFilter')


  svgWrapToImage.appendChild(imageTosvg)
  newFrame.appendChild(svgWrapToImage)
  container.appendChild(newFrame)

  const imageControls = document.createElement('div');

  const imageRemove = document.createElement('div');
  const imageRotate = document.createElement('div');
  const imageScale = document.createElement('div');
  const imageScaleWidth = document.createElement('div');
  const imageScaleHeight = document.createElement('div');

  imageScaleWidth.classList.add('image-scaleWidth')
  imageScaleHeight.classList.add('image-scaleHeight')

  imageControls.classList.add('image-controls', 'active', formatNow);
  imageControls.setAttribute('data-count', `count_${count}`)

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
  }, 100)

  imageControls.addEventListener('mousedown', () => {
    const imagesInside = container.querySelector('.generated-img-wrap.active');
    if (imagesInside) imagesInside.classList.remove('active');
    newFrame.classList.add('active');
  })

  dragNdropFormat(imageControls);
  controlScaleFunction(newFrame, imageControls, imageScale, imageScaleWidth, imageScaleHeight);

  imageRotate.addEventListener("ondragstart", () => { return false });
  imageRotate.addEventListener("mousedown", () => {
    rotate(imageControls, imageRotate)
  });
  imageRotate.addEventListener("touchstart", () => {
    rotate(imageControls, imageRotate)
  });
}

