function priceCalculator(price) {
  let allFormats = document.querySelectorAll('.formatWrap');
  let totalPrice = 0;
  allFormats.forEach(format => {
    totalPrice += Number(format.getAttribute('format-price'));
  });
  price.innerHTML = totalPrice;
}