// Функция, которая принимает элемент div и создает изображение из него
function createImageFromDiv(divElement) {
  // Создаем холст, на который будем рисовать изображение
  let canvas = document.createElement('canvas');
  let context = canvas.getContext('2d');

  // Задаем ширину и высоту холста
  canvas.width = divElement.offsetWidth;
  canvas.height = divElement.offsetHeight;

  // Рисуем содержимое div'a на холст
  context.drawImage(divElement, 0, 0);

  // Возвращаем холст в виде dataURL
  return canvas.toDataURL();
}