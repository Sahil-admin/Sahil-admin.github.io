document.addEventListener("DOMContentLoaded", function() {
    const nav = document.querySelector('nav');
    window.onscroll = () => {
        if(window.pageYOffset > 50) {
            nav.classList.add('sticky');
        } else {
            nav.classList.remove('sticky');
        }
    };
});
