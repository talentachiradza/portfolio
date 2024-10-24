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


// let js='amazing'
// if (js === 'amazing') alert("Hello world my name is Talent Chiradza.")

    document.addEventListener('DOMContentLoaded', function() {
        emailjs.init("NijvwUmFY0xxb_uM9"); // Correct EmailJS Public Key
    
        document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission
    
            const form = event.target;
            const formStatus = document.getElementById('formStatus');
    
            // Show "sending" message to the user
            formStatus.style.display = 'block';
            formStatus.textContent = 'Sending your message...';
    
            // Extract form field values
            const userName = form.querySelector('input[name="from_name"]').value;
            const userEmail = form.querySelector('input[name="reply_to"]').value;
            const userPhone = form.querySelector('input[name="phone"]').value;
            const userMessage = form.querySelector('textarea[name="message"]').value;
    
            // Create the formatted message content (this is optional and for your own logging)
            const formattedMessage = `
                You got a new message from:
                Name: ${userName}
                Email: ${userEmail}
                Phone: ${userPhone}
                Message: ${userMessage}
            `;
    
            // Log the formatted message for debugging (you can remove this if not needed)
            console.log(formattedMessage);
    
            // Send the form via EmailJS
            emailjs.sendForm('service_crkppii', 'template_qcudnuo', form)
                .then(function(response) {
                    console.log('Success:', response);
                    
                    // Success message with sender's name and email
                    formStatus.textContent = `Message sent successfully! We will contact you soon at ${userEmail}, ${userName}, ${userPhone}.`;
                    formStatus.style.color = 'white'; // Change color to white for success
                    
                    // Set a timeout to clear or hide the message after 3 seconds
                    setTimeout(() => {
                        formStatus.textContent = '';  // Clear the success message
                        formStatus.style.color = '';  // Reset color
                    }, 4000);  // 3000 milliseconds = 4 seconds
                    
                    form.reset(); // Reset the form after successful submission
                }, function(error) {
                    console.error('Error:', error);
                    
                    // Error message to the user
                    formStatus.textContent = 'Failed to send the message. Please try again.';
                    formStatus.style.color = 'red'; // Change color to red for error
                });
        });
    });
    