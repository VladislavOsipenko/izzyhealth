document.addEventListener('DOMContentLoaded', () => {

    const tabs = document.querySelectorAll('.tabmenu__item'),
          tabsContant = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabmenu');

    function hideTabContent () {
        tabsContant.forEach(item => {
            item.style.display = 'none';
        });
    
        tabs.forEach(item => {
            item.classList.remove('tabmenu__item-active');
        });
    }

    function showTabContent(i = 0) {
        tabsContant[i].style.display = 'block';
        tabs[i].classList.add('tabmenu__item-active');
    }
    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabmenu__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {  
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    const menu = document.querySelector('.header__menu'),
    menuItem = document.querySelectorAll('.header__li'),
    hamburger = document.querySelector('.header__hamburger');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('header__menu_active');
    });
    
    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('header__hamburger_active');
            menu.classList.toggle('header__menu_active');
        })
    })
    


});