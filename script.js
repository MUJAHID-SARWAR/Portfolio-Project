 
        // Toogle icon navbar
        let menuIcon = document.querySelector('#menu-icon');
        let navbar = document.querySelector('.navbar');

        menuIcon.onclick = () =>{
            menuIcon.classList.toggle('bx-x');
            navbar.classList.toggle('active');
        }


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id'); // Corrected 'sec' variable name

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*="' + id + '"]').classList.add('active'); // Enclosed the attribute selector in quotes

            });
        }
    });

    // Sticky Navbar

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove toogle icon and navbar when click navbar link (scroll)
              menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');


};
  // Scroll Reveal

  ScrollReveal({
     reset: true,
    distance: '80px',
    duration: 2000,
    delay:200
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1 , .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p , .about-content', { origin: 'right' });



let form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  let fullName = document.querySelector('input[placeholder="Full Name"]').value;
  let emailAddress = document.querySelector('input[placeholder="Email Address"]').value;
  let mobileNumber = document.querySelector('input[placeholder="Mobile Number (Format: 123-456-7890)"]').value;
  let emailSubject = document.querySelector('input[placeholder="Email Subject"]').value;
  let message = document.querySelector('textarea[placeholder="Your Message"]').value;

  // Perform client-side validation
  if (!fullName || !emailAddress || !mobileNumber || !emailSubject || !message) {
    alert('Please fill out all fields.');
    return;
  }

  // If all fields are filled out, send the email using EmailJS
  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
    from_name: fullName,
    from_email: emailAddress,
    to_email: "mujahidsarwar288@gmail.com",
    subject: emailSubject,
    message: message,
  })
  .then(function(response) {
    alert('Message sent successfully!');
  }, function(error) {
    alert('Failed to send message: ' + error);
  });
});