const leftSidebarBurger = document.querySelector('.constructor__menu-left__burger')
const leftSidebar = document.querySelector('.col-lg-2.constructor__menu-left')
const rightSidebarBurger = document.querySelector('.constructor__menu-right__burger')
const rightSidebar = document.querySelector('.col-lg-3.constructor__menu-left')

function toggleSidebar(button,sidebar){
    button.addEventListener('click',()=>{
        button.classList.toggle('active')
        sidebar.classList.toggle('active')
    
    })
}

toggleSidebar(leftSidebarBurger,leftSidebar)
toggleSidebar(rightSidebarBurger,rightSidebar)


const formatSubmenu = document.querySelector('.constructor__menu-item-submenu')
const openFormatsButton = document.querySelector('.submenu-title')



function openFormatsSubmenu(submenu,button){
    button.addEventListener('click',()=>{
        submenu.classList.add('active')
    })
}

openFormatsSubmenu(formatSubmenu,openFormatsButton)