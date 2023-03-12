function dragNdropFormat(formatFrameActive) {
    let isDragging = false;
    let currentX;
    let currentY;
    let initialX;
    let initialY;
    let xOffset = 0;
    let yOffset = 0;

    formatFrameActive.ondragstart = function () {
        return false;
    };

    formatFrameActive.addEventListener("mousedown", dragStart);
    formatFrameActive.addEventListener("mouseup", dragEnd);
    formatFrameActive.addEventListener("mouseout", dragEnd);
    formatFrameActive.addEventListener("mousemove", drag);
    formatFrameActive.addEventListener("touchstart", dragStart);
    formatFrameActive.addEventListener("touchend", dragEnd);
    formatFrameActive.addEventListener("touchmove", drag);

    function dragStart(e) {
        if (formatFrameActive.classList.contains('active') && (e.target === formatFrameActive || e.target.classList.contains('innerFrame__container'))) {
            if (e.touches) {
                initialX = e.clientX - xOffset || e.touches[0].clientX - xOffset;
                initialY = e.clientY - yOffset || e.touches[0].clientY - yOffset;
            } else {
                initialX = e.clientX - xOffset;
                initialY = e.clientY - yOffset;
            }
            isDragging = true;
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
        if (!getComputedStyle(el).getPropertyValue('--rotate')) {
            el.style.setProperty('--rotate', '0deg');
        }
        el.style.setProperty('--translate', `${xPos}px,${yPos}px,0`);
    }
}