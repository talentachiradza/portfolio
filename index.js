//  ====menu icon navbar====== 
 let menulcon = document.querySelector('#menu-icon');
 let navbar = document.querySelector('.navbar');

 menulcon.onclick = () => {
    menulcon.classList.toggle('bx-x');
    navbar.classList.toggle('active')
 }

 
//  ====scroll section active links======
 let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });
};

// sticky navbar
window.onscroll = () => {
let header = document.querySelector('.header')

header .classList.toggle('sticky' , window.scrollY > 100);


// =====remove menu icon navbar=====
menulcon.classList.remove('bx-x');
navbar.classList.remove('active') 
};

// contact
const inputs= document.querySelectorAll(".input");

function focusFunc(){
    let parent =this.parentNode;
    parent.classList.add("focus");
}

function blurFunc(){
    let parent =this.parentNode;
    if(this.value==""){
         parent.classList.remove("focus");
    }  
}

inputs.forEach(input=>{
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
})

// ===scrollreveal===
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .ser-container , .port-box, .contact', { origin: 'bottom' });


let js='amazing'
if (js === 'amazing') alert("Hello world my name is Talent Chiradza.")

    document.addEventListener('DOMContentLoaded', function() {
        emailjs.init("nnXdnprFgR7LO3vH9"); // Replace with your actual EmailJS Public Key
    
        document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission
    
            const form = event.target;
    
            emailjs.sendForm('service_uthocg6', 'template_xbnnoic', form)
                .then(function(response) {
                    console.log('Success:', response);
                    alert('Message sent successfully!');
                    form.reset(); // Reset the form after successful submission
                }, function(error) {
                    console.error('Error:', error);
                    alert('Failed to send the message. Please try again.');
                    console.log('Error details:', error.text); // Log additional error details
                });
        });
    });
    