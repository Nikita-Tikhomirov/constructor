function dragNdropFormat(formatFrameActive) {
    let isDragging = false;
    let currentX;
    let currentY;
    let initialX;
    let initialY;
    let xOffset = 0;
    let yOffset = 0;
    formatFrameActive.addEventListener("ondragstart", () => {return false});
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