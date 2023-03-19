function dragNdropFormat(formatFrameActive) {
    let isDragging = false;
    let currentX;
    let currentY;
    let initialX;
    let initialY;
    let xOffset = 0;
    let yOffset = 0;
    formatFrameActive.addEventListener("ondragstart", () => { return false });
    formatFrameActive.addEventListener("mousedown", dragStart);
    formatFrameActive.addEventListener("mouseup", dragEnd);
    formatFrameActive.addEventListener("mouseout", dragEnd);
    formatFrameActive.addEventListener("mousemove", drag);

    formatFrameActive.addEventListener("touchstart", dragStart);
    formatFrameActive.addEventListener("touchend", dragEnd);
    formatFrameActive.addEventListener("touchmove", drag);

    function dragStart(e) {
        const activeFrameWrap = document.querySelector(`.${formatFrameActive.classList[0]}.active`);
        if (activeFrameWrap) activeFrameWrap.classList.remove('active');
        formatFrameActive.classList.add('active');

        if (e.target === formatFrameActive || e.target.classList.contains('innerFrame__container') || e.target.classList.contains('formatWrap__container')) {
            if (e.touches) {
                initialX = e.clientX - xOffset || e.touches[0].clientX - xOffset;
                initialY = e.clientY - yOffset || e.touches[0].clientY - yOffset;
            } else {
                initialX = e.clientX - xOffset;
                initialY = e.clientY - yOffset;
            }
            isDragging = true;
        }


        // Передаем Дефолтные значения в инпуты
        let textareaInside = formatFrameActive.querySelector('.generated-img-wrap.active .text-area')

        if (!textareaInside == '') {

            let inputText = document.querySelector('.input-text')
            let inputColor = document.querySelector('#foo')
            let inputFamily = document.querySelector('.input-font-family')
            let inputSize = document.querySelector('#input-font')

            updateTextMenu(inputColor, inputText, inputFamily, inputSize, textareaInside)

        }




    }

    function dragEnd(e) {
        isDragging = false;
    }

    function drag(e) {
        if (isDragging) {
            e.preventDefault();

            if (e.touches) {
                currentX = e.clientX - initialX || e.touches[0].clientX - initialX;
                currentY = e.clientY - initialY || e.touches[0].clientY - initialY;
            } else {
                currentX = e.clientX - initialX;
                currentY = e.clientY - initialY;
            }

            xOffset = currentX;
            yOffset = currentY;

            setTranslate(currentX, currentY, formatFrameActive);

            if (formatFrameActive.classList.contains('image-controls')) {
                const countId = formatFrameActive.getAttribute('data-count');
                const image = formatFrameActive.parentElement.parentElement.querySelector(`#${countId}`);
                setTranslate(currentX, currentY, image);
            }
        }
    }

    function setTranslate(xPos, yPos, el) {
        el.style.setProperty('--translate', `${xPos}px,${yPos}px,0`);
    }
}



function updateTextMenu(colorInput, textArea, fontFamilySelect, sizeRange, textareaInside) {
    textArea.value = textareaInside.innerHTML

    let colorTextNow = textareaInside.style.color

    function getRGBValues(rgbString) {
        let rgbValues = rgbString.replace(/[^\d,]/g, '').split(',');
        let [r, g, b] = rgbValues;
        return { r, g, b };
    }

    let { r, g, b } = getRGBValues(colorTextNow);

    r = Number(r);
    g = Number(g);
    b = Number(b);

    function rgbToHex(r1, g1, b1) {
        return "#" + ((1 << 24) + (r1 << 16) + (g1 << 8) + b1).toString(16).slice(1).toUpperCase();
    }

    colorInput.value = rgbToHex(r, g, b)

    console.log(fontFamilySelect);


    console.log(textareaInside.style.fontFamily);


    fontFamilySelect.value = textareaInside.style.fontFamily

    fontFamilySelect.style.fontFamily = textareaInside.style.fontFamily

}


