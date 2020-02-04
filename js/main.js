const burgerMenu = () => {

    const menu = document.querySelector('.burger'),
        menuNav = document.querySelector('.nav-menu'),
        body = document.querySelector('body');

    body.addEventListener('click', (event) => {

        let target = event.target;
        console.log(target);
        if (target.closest('.burger')) {
            menu.classList.add('burger-open');
            menuNav.style.display = 'block';
        } else if (target.classList.contains('burger')) {
            menu.classList.remove('burger-open');
            menuNav.style.display = 'none';
        } else if (target.tagName !== 'DIV') {
            menu.classList.remove('burger-open');
            menuNav.style.display = 'none';
        } else {
            return;
        }
        
    });

};

burgerMenu();