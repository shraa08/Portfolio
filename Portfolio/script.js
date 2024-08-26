let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
  navbar.classList.toggle('active');
  menuIcon.classList.toggle('bx-x')
};

//Scroll section
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('section');

window.onscroll = () => {
  section.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop-150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    if (top > offset && top < (offset + height)) {
      navLinks.forEach(link => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id+ ']').classList.add('active');
        });
        }
  });

 let header = document.querySelector('header');
 header.classList.toggle('sticky' , window.scrollY>100);

 menuIcon.classList.remove('bx-x');
 navbar.classList.remove('active');
};

ScrollReveal({
  reset: true,
  distance: '50px',
  duration: 2000,
  delay: 200
});

ScrollReveal.reveal('.home-content, .heading',{origin: 'top'});
ScrollReveal.reveal('.home-img, .skills-container, .project-box, .contact form',{origin: 'bottom'});
ScrollReveal.reveal('.home-content h1, .about-img',{origin: 'left'});
ScrollReveal.reveal('.home-content p, .about-content',{origin: 'right'});