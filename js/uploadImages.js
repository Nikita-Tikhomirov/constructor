const uploadContainer = document.querySelector('.upload-container');
const fileInput = document.querySelector('#file-input');


// Добавить исключение для одинаковых изображений!!! Ломает загрузчик


const addImage = (file) => {
  const reader = new FileReader();
  
  
  reader.addEventListener('load', () => {
    // const imgWrap = document.createElement('div');
    // imgWrap.classList.add('generated-img-wrap');
    // imgWrap.classList.add(formatNow);

    // imgWrap.style.width = '300px';
    // const hidenArea = sideNow.querySelector('.constructor__product-container-image-wrap.active')
    // hidenArea.appendChild(imgWrap);
    const image = new Image();
    image.src = reader.result;
    // imgWrap.appendChild(image);
    uploadPopup.classList.remove('active');

    // createControlsForImage();
    createNewFrame(image)
  controlScaleFunction();

    dragNdropCustom();
    
  });
  reader.readAsDataURL(file);

};

uploadContainer.addEventListener('dragover', (event) => {
  event.preventDefault();
  uploadContainer.classList.add('dragover');
});

uploadContainer.addEventListener('dragleave', (event) => {
  event.preventDefault();
  uploadContainer.classList.remove('dragover');
});

uploadContainer.addEventListener('drop', (event) => {
  event.preventDefault();
  uploadContainer.classList.remove('dragover');
  const file = event.dataTransfer.files[0];
  if (file.type.startsWith('image/')) {
    addImage(file);
  }
});

fileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file.type.startsWith('image/')) {
    addImage(file);
  }
});




// function createControlsForImage() {
//   const generatedImgWrap = sideNow.querySelector('.generated-img-wrap');
//   const imageControls = document.createElement('div');
//   const imageRemove = document.createElement('div');
//   const imageRotate = document.createElement('div');
//   const imageScale = document.createElement('div');

//   imageControls.classList.add('image-controls');
//   imageControls.classList.add('active');
//   imageControls.classList.add(formatNow);

//   imageRemove.classList.add('image-remove');
//   imageRotate.classList.add('image-rotate');
//   imageScale.classList.add('image-scale');

//   imageControls.appendChild(imageRemove);
//   // Удаление рамки и блока 
//   deletePrint(imageRemove, generatedImgWrap)
//   imageControls.appendChild(imageRotate);
//   imageControls.appendChild(imageScale);

//   const container = sideNow;
//   const image = generatedImgWrap.querySelector('img');
//   image.onload = function () {
//     const { x, y, width, height } = generatedImgWrap.getBoundingClientRect();
//     const containerRect = container.getBoundingClientRect();

//     imageControls.style.width = `${width}px`;
//     imageControls.style.height = `${height}px`;
//     imageControls.style.position = `absolute`;
//     imageControls.style.top = `${y - containerRect.top}px`;
//     imageControls.style.left = `${x - containerRect.left}px`;

//     container.appendChild(imageControls);
//     controlScaleFunction();
//   };
// }

