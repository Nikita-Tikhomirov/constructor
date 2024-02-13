function createColorMatrix(newColor) {
  let svgInside = false

  const activeImgWrap = document.querySelector('.generated-img-wrap.active')

  if (activeImgWrap) {
    svgInside = activeImgWrap.querySelector('.image-svg');
  }

  if (svgInside) {
    const activeImgWrapId = activeImgWrap.id;
    let clearId = activeImgWrapId.replace(/\D/g, '');
  
    const setPrimaryColor = function (_r, _g, _b) {

      const rScaled = _r / 255.0;
      const gScaled = _g / 255.0;
      const bScaled = _b / 255.0;

      const feColorMatrixElem = document.getElementById(`filter_count_${clearId}`).getElementsByTagName('feColorMatrix')[0];
      feColorMatrixElem.setAttribute(
        `values`,
        `
          0 0 0 0 ${rScaled}
          0 0 0 0 ${gScaled}
          0 0 0 0 ${bScaled}
          0.2 0.2 0.2 0 0
        `
      );
    };

    function hexToRgb(hex) {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : null;
    }

    console.log(newColor);
    const color = hexToRgb(newColor);
    setPrimaryColor(color.r, color.g, color.b);
  }
}
