const headerBk = document.querySelector('.container__header--payments')

window.addEventListener('scroll', () => {
    if (scrollY === 0) {

        headerBk.style.background = 'transparent';
    } else {
        headerBk.style.background = '#FFF';

    }
})
