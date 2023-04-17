
const constructorContainer = document.querySelector('.middle-container')
let onHelpers = true

let addFormatCounter = 0

function formatHelper(helperTextToPopup){
    if (onHelpers == true) {
        const helper = document.createElement('div')
        helper.classList.add('helper')
        constructorContainer.appendChild(helper)
    
        const helperWrap = document.createElement('div')
        helperWrap.classList.add('helperWrap')
        helper.appendChild(helperWrap)
    
        const helperClose = document.createElement('div')
        helperClose.classList.add('helperClose')
        helperWrap.appendChild(helperClose)
        helperClose.addEventListener('click',()=>{
            helperClose.parentElement.parentElement.remove()
        })
    
        const helperText = document.createElement('div')
        helperText.classList.add('helperText')
        helperText.innerHTML = helperTextToPopup
        helperWrap.appendChild(helperText)
    
       const helperTrigerWrap =  document.createElement('div')
       helperTrigerWrap.classList.add('helperTrigerWrap')
       helperWrap.appendChild(helperTrigerWrap)
    
       const helperTrigerCheckbox = document.createElement('div')
       helperTrigerCheckbox.classList.add('helperTrigerCheckbox')
       helperTrigerCheckbox.classList.add('active')
       helperTrigerWrap.appendChild(helperTrigerCheckbox)
    
       const helpertrigerText = document.createElement('div')
       helpertrigerText.classList.add('helpertrigerText')
       helpertrigerText.innerHTML = 'Отключить подсказки'
       helperTrigerWrap.appendChild(helpertrigerText)
    
    
    
       helperTrigerCheckbox.addEventListener('click',()=>{
        helperTrigerCheckbox.classList.toggle('active')
        if(helperTrigerCheckbox.classList.contains('active')){
            onHelpers = true
        }else{
            onHelpers = false
        }
    
       }) 
    } else {
        
    }


}

function addPulseAnimation(elementAnim){
    elementAnim.classList.add('pulse')
    setTimeout(() => {
        elementAnim.classList.remove('pulse')
    }, 1000);
}