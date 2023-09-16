
let  menuIcon = document.querySelector('#menuIcon')
let navbar = document.querySelector('.navigation')
menuIcon.onclick = () => {
     menuIcon.classList.toggle('bx-x');
     navbar.classList.toggle('active');
}  

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')
        
        if (top >= offset &&  top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('.header');
    header.classList.toggle('sticky',window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}


let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun')
    document.body.classList.toggle('light')
}


ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.presentation ' , { origin: 'top' });
ScrollReveal().reveal('.profile-text h2 , .portifolio h2 , .portifolio-container, .social-links ,form , .certificates' , { origin: 'bottom' });
ScrollReveal().reveal('.profile-image  , .icons , .my-skills h2 , .certifications h2', { origin: 'left' });