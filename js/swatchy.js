let hasSwatchyRun = false;

/**
 *
 * @param {Boolean} [autoClose=false] - Should the color picker close after selecting a color?
 * @param {Array} [swatches] - Custom color swatches to use. Enter an array of hex codes
 * @constructor
 */
function Swatchy(
    autoClose = true,
    // swatches=[
    //     "#B71C1C", "#D32F2F", "#F44336", "#E57373", "#FFCDD2",
    //     "#880E4F", "#C2185B", "#E91E63", "#F06292", "#F8BBD0",
    //     "#4A148C", "#7B1FA2", "#9C27B0", "#BA68C8", "#E1BEE7",
    //     "#311B92", "#512DA8", "#673AB7", "#9575CD", "#D1C4E9",
    //     "#1A237E", "#303F9F", "#3F51B5", "#7986CB", "#C5CAE9",
    //     "#0D47A1", "#1976D2", "#2196F3", "#64B5F6", "#BBDEFB",
    //     "#01579B", "#0288D1", "#03A9F4", "#4FC3F7", "#B3E5FC",
    //     "#006064", "#0097A7", "#00BCD4", "#4DD0E1", "#B2EBF2",
    //     "#004D40", "#00796B", "#009688", "#4DB6AC", "#B2DFDB",
    //     "#194D33", "#388E3C", "#4CAF50", "#81C784", "#C8E6C9",
    //     "#33691E", "#689F38", "#8BC34A", "#AED581", "#DCEDC8",
    //     "#827717", "#AFB42B", "#CDDC39", "#DCE775", "#F0F4C3",
    //     "#F57F17", "#FBC02D", "#FFEB3B", "#FFF176", "#FFF9C4",
    //     "#FF6F00", "#FFA000", "#FFC107", "#FFD54F", "#FFECB3",
    //     "#E65100", "#F57C00", "#FF9800", "#FFB74D", "#FFE0B2",
    //     "#BF360C", "#E64A19", "#FF5722", "#FF8A65", "#FFCCBC",
    //     "#3E2723", "#5D4037", "#795548", "#A1887F", "#D7CCC8",
    //     "#263238", "#455A64", "#607D8B", "#90A4AE", "#CFD8DC",
    //     "#000000", "#525252", "#969696", "#D9D9D9", "#FFFFFF",
    // ]
    swatches=[
      '#f8fafc', '#f1f5f9', '#e2e8f0', '#cbd5e1', '#94a3b8', '#64748b', '#475569', '#334155', '#1e293b', '#0f172a', '#020617',
      // '#f9fafb', '#f3f4f6', '#e5e7eb', '#d1d5db', '#9ca3af', '#6b7280', '#4b5563', '#374151', '#1f2937', '#111827', '#030712',
      // '#fafafa', '#f4f4f5', '#e4e4e7', '#d4d4d8', '#a1a1aa', '#71717a', '#52525b', '#3f3f46', '#27272a', '#18181b', '#09090b',
      // '#fafafa', '#f5f5f5', '#e5e5e5', '#d4d4d4', '#a3a3a3', '#737373', '#525252', '#404040', '#262626', '#171717', '#0a0a0a',
      '#fafaf9', '#f5f5f4', '#e7e5e4', '#d6d3d1', '#a8a29e', '#78716c', '#57534e', '#44403c', '#292524', '#1c1917', '#0c0a09',
      '#fef2f2', '#fee2e2', '#fecaca', '#fca5a5', '#f87171', '#ef4444', '#dc2626', '#b91c1c', '#991b1b', '#7f1d1d', '#450a0a',
      '#fff7ed', '#ffedd5', '#fed7aa', '#fdba74', '#fb923c', '#f97316', '#ea580c', '#c2410c', '#9a3412', '#7c2d12', '#431407',
      '#fffbeb', '#fef3c7', '#fde68a', '#fcd34d', '#fbbf24', '#f59e0b', '#d97706', '#b45309', '#92400e', '#78350f', '#451a03',
      '#fefce8', '#fef9c3', '#fef08a', '#fde047', '#facc15', '#eab308', '#ca8a04', '#a16207', '#854d0e', '#713f12', '#422006',
      '#f7fee7', '#ecfccb', '#d9f99d', '#bef264', '#a3e635', '#84cc16', '#65a30d', '#4d7c0f', '#3f6212', '#365314', '#1a2e05',
      '#f0fdf4', '#dcfce7', '#bbf7d0', '#86efac', '#4ade80', '#22c55e', '#16a34a', '#15803d', '#166534', '#14532d', '#052e16',
      '#ecfdf5', '#d1fae5', '#a7f3d0', '#6ee7b7', '#34d399', '#10b981', '#059669', '#047857', '#065f46', '#064e3b', '#022c22',
      '#f0fdfa', '#ccfbf1', '#99f6e4', '#5eead4', '#2dd4bf', '#14b8a6', '#0d9488', '#0f766e', '#115e59', '#134e4a', '#042f2e',
      '#ecfeff', '#cffafe', '#a5f3fc', '#67e8f9', '#22d3ee', '#06b6d4', '#0891b2', '#0e7490', '#155e75', '#164e63', '#083344',
      '#f0f9ff', '#e0f2fe', '#bae6fd', '#7dd3fc', '#38bdf8', '#0ea5e9', '#0284c7', '#0369a1', '#075985', '#0c4a6e', '#082f49',
      '#eff6ff', '#dbeafe', '#bfdbfe', '#93c5fd', '#60a5fa', '#3b82f6', '#2563eb', '#1d4ed8', '#1e40af', '#1e3a8a', '#172554',
      '#eef2ff', '#e0e7ff', '#c7d2fe', '#a5b4fc', '#818cf8', '#6366f1', '#4f46e5', '#4338ca', '#3730a3', '#312e81', '#1e1b4b',
      '#f5f3ff', '#ede9fe', '#ddd6fe', '#c4b5fd', '#a78bfa', '#8b5cf6', '#7c3aed', '#6d28d9', '#5b21b6', '#4c1d95', '#2e1065',
      '#faf5ff', '#f3e8ff', '#e9d5ff', '#d8b4fe', '#c084fc', '#a855f7', '#9333ea', '#7e22ce', '#6b21a8', '#581c87', '#3b0764',
      '#fdf4ff', '#fae8ff', '#f5d0fe', '#f0abfc', '#e879f9', '#d946ef', '#c026d3', '#a21caf', '#86198f', '#701a75', '#4a044e',
      '#fdf2f8', '#fce7f3', '#fbcfe8', '#f9a8d4', '#f472b6', '#ec4899', '#db2777', '#be185d', '#9d174d', '#831843', '#500724',
      '#fff1f2', '#ffe4e6', '#fecdd3', '#fda4af', '#fb7185', '#f43f5e', '#e11d48', '#be123c', '#9f1239', '#881337', '#4c0519',
    ]
) {

    if (!hasSwatchyRun) {
        hasSwatchyRun = true;
        let swatchyCount = document.querySelectorAll('.swatchy-trigger');

        for (let id = 0; id < swatchyCount.length; id++) {

            let output
            let container

            // swatches = props?.swatches ?? this.swatches

            document.querySelectorAll('.swatchy-trigger').item(id)
            document.querySelectorAll('.swatchy-trigger').item(id).addEventListener('click', togglePopup)
            output = document.querySelectorAll('.swatchy-output').item(id)

            // create popup element
            container = document.createElement("div")
            container.classList.add('swatchy-element')
            container.setAttribute('style', 'display: none;')
            output.after(container)

            // add swatches to popup
            let swatchContainer = document.createElement('div')
            swatchContainer.classList.add('swatchy-swatches')
            container.appendChild(swatchContainer)

            let swatchCount = -1;
            for (const swatch of swatches) {
                swatchCount++;
                // if ((swatchCount % 5 === 0) && (swatchCount % 10 !== 0)) {
                //     let gap = document.createElement('div')
                //     swatchContainer.appendChild(gap)
                // }
                let colorButton = document.createElement('div')
                colorButton.setAttribute('data-swatchy-color', swatch)
                colorButton.style.backgroundColor = swatch
                colorButton.classList.add('swatchy-color-button')
                colorButton.addEventListener('click', selectColor)
                swatchContainer.appendChild(colorButton)
            }

            function selectColor(e) {
                let input = document.querySelectorAll('.swatchy-output').item(id)
                let newColor = e.target.getAttribute('data-swatchy-color')
                input.setAttribute('value', newColor)
                input.setAttribute('data-swatchy-color', newColor)
                input.setAttribute('style', 'background-color: ' + newColor + '; color: ' + newColor + ';')

                selectTextColor(newColor)
                createColorMatrix(newColor)

                if (autoClose) {
                    togglePopup()
                }
            }

            function togglePopup() {
                let el = document.querySelectorAll('.swatchy-element').item(id)

                let display = (window.getComputedStyle ? getComputedStyle(el, null) : el.currentStyle).display
                if ('none' === display) {
                    el.style.display = 'block'
                } else {
                    el.style.display = 'none'
                }
            }
        }
    } else {
        console.info('You only need to call swatchy once per page');
    }
}
