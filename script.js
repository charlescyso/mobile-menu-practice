const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => item.addEventListener('click', () => {
    navItems.forEach(item =>
        item.parentElement.classList.remove('active'));
    item.parentElement.classList.add('active');
}));