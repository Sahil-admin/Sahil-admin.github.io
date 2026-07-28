document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
});

const darkThemeButton = document.createElement('button');
darkThemeButton.textContent = 'Toggle Dark Theme';
darkThemeButton.style.position = 'fixed';
darkThemeButton.style.bottom = '20px';
darkThemeButton.style.right = '20px';
darkThemeButton.style.zIndex = '1000';
darkThemeButton.style.padding = '1rem 2rem';
darkThemeButton.style.backgroundColor = '#007bff';
darkThemeButton.style.color = '#ffffff';
darkThemeButton.style.border = 'none';
darkThemeButton.style.borderRadius = '5px';
darkThemeButton.style.cursor = 'pointer';

document.body.appendChild(darkThemeButton);

darkThemeButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
});
