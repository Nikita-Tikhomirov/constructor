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
  if (img.classList.contains('text-area')) {
    newFrame.appendChild(img)
    container.appendChild(newFrame)
    console.log(1);

  } else {

    const svgWrapToImage = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

    var boxWidth = img.width / 2;
    var boxHeight = img.height / 2;
    svgWrapToImage.setAttributeNS(null, "viewBox", "0 0 " + boxWidth + " " + boxHeight);
    svgWrapToImage.setAttributeNS(null, "width", '100%');
    svgWrapToImage.setAttributeNS(null, "height", '100%');
    svgWrapToImage.style.display = "block";



    const svgFilter = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'filter'
    );


    svgFilter.setAttributeNS(null, "color-interpolation-filters", "sRGB");
    svgFilter.setAttributeNS(null, "id", "colorTransformFilter");

    svgWrapToImage.appendChild(svgFilter)

    const filterColormatrix = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'feColorMatrix'
    );

    filterColormatrix.setAttributeNS(null, "in", "SourceGraphic");
    filterColormatrix.setAttributeNS(null, "type", "matrix");
    filterColormatrix.setAttributeNS(null, "values", `1 0 0 0 0 
  0 1 0 0 0
  0 0 1 0 0
  0 0 0 1 0`);

    svgFilter.appendChild(filterColormatrix)

    const imageTosvg = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'image'
    );
    imageSrc = img.src
    imageTosvg.setAttributeNS('http://www.w3.org/1999/xlink', "xlink:href", imageSrc);
    imageTosvg.setAttributeNS(null, "width", boxWidth);
    imageTosvg.setAttributeNS(null, "height", boxHeight);
    imageTosvg.setAttributeNS(null, "filter", 'url(#colorTransformFilter)');


    svgWrapToImage.appendChild(imageTosvg)


    newFrame.appendChild(svgWrapToImage)
    container.appendChild(newFrame)
    console.log(2);
  }

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

