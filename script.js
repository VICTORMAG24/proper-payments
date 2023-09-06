const headerBk = document.querySelector('.container__header--transparent')
const navHeader = document.querySelectorAll('.nav__servicios-header')
console.log( navHeader)

window.addEventListener('scroll', () => {
    if (scrollY === 0) {

        headerBk.style.background = 'transparent';
        headerBk.style.transition = ' all .25s';
        navHeader.forEach(nav => {
            nav.style.color = 'white';
        });
        
    }
    else {
        navHeader.forEach(nav => {
            nav.style.color = '';
        });
        headerBk.style.background = '#FFF';

    }
})
