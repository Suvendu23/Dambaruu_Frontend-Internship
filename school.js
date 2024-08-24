// Mobile Navigation
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        burger.classList.toggle('toggle');
    });
}

navSlide();

// Image Slider with Pagination
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll('.slider img');
    let dots = document.querySelectorAll('.dot');
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Dynamic News Loading
const newsContainer = document.getElementById('news-container');
const newsItems = [
    { title: 'School Wins National Award', date: '2023-05-15' },
    { title: 'New Science Lab Opening', date: '2023-05-10' },
    { title: 'Student Art Exhibition', date: '2023-05-05' }
];

newsItems.forEach(item => {
    const newsElement = document.createElement('div');
    newsElement.classList.add('news-item');
    newsElement.innerHTML = `
        <h3>${item.title}</h3>
        <p>${item.date}</p>
    `;
    newsContainer.appendChild(newsElement);
});

// Form Validation
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for your message. We will get back to you soon!');
        contactForm.reset();
    } else {
        alert('Please fill in all fields.');
    }
});
