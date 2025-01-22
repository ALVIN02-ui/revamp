/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
	navToggle = document.getElementById('nav-toggle'),
	navClose = document.getElementById('nav-close');

/* Menu show */
if (navToggle) {
	navToggle.addEventListener('click', () => {
		navMenu.classList.add('show-menu');
	});
}

/* Menu hidden */
if (navClose) {
	navClose.addEventListener('click', () => {
		navMenu.classList.remove('show-menu');
	});
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
	const navMenu = document.getElementById('nav-menu');
	// When we click on each nav__link, we remove the show-menu class
	navMenu.classList.remove('show-menu');
};
navLink.forEach((n) => n.addEventListener('click', linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
const bgHeader = () => {
	const header = document.getElementById('header');
	// Add a class if the bottom offset is greater than 50 of the viewport
	this.scrollY >= 50 ? header.classList.add('bg-header') : header.classList.remove('bg-header');
};
window.addEventListener('scroll', bgHeader);
bgHeader();

/*=============== SWIPER SERVICES ===============*/
const swiperServices = new Swiper('.services__swiper', {
	loop: true,
	grabCursor: true,
	spaceBetween: 24,
	slidesPerView: 'auto',

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
	const scrollUp = document.getElementById('scroll-up');
	// When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');
};
window.addEventListener('scroll', scrollUp);
scrollUp();

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
	const scrollDown = window.scrollY;

	sections.forEach((current) => {
		const sectionHeight = current.offsetHeight,
			sectionTop = current.offsetTop - 58,
			sectionId = current.getAttribute('id'),
			sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

		if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
			sectionsClass.classList.add('active-link');
		} else {
			sectionsClass.classList.remove('active-link');
		}
	});
};
window.addEventListener('scroll', scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
// jQuery for the company logo testimonials
$(document).ready(function () {
	$('.customer-logos').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: false,
		dots: false,
		pauseOnHover: false,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 4,
				},
			},
			{
				breakpoint: 520,
				settings: {
					slidesToShow: 3,
				},
			},
		],
	});
});
/*===========READ MORE==========*/ 
// Add an event listener to the "Read More" button
document.querySelector('.read-more-btn').addEventListener('click', function() {
    document.querySelector('.read-more-content').classList.toggle('active');
});
/*==========submit quote=======*/
// Add an event listener to the "submit" button

// document.addEventListener("DOMContentLoaded", function() {
//     const form = document.querySelector("form");
//     const resultElement = document.createElement("p"); // Create a paragraph element to display the result
//     form.appendChild(resultElement); // Append the result element to the form
  
//     form.addEventListener("submit", async function(event) {
//       event.preventDefault();
//       resultElement.textContent = "Sending...."; // Display "Sending..." message
//       const formData = new FormData(event.target);
  
//       formData.append("access_key", "ceab3c13-e6a3-4430-8465-74656f19626b");
  
//       try {
//         const response = await fetch("https://api.web3forms.com/submit", {
//           method: "POST",
//           body: formData
//         });
  
//         const data = await response.json();
  
//         if (data.success) {
//           resultElement.textContent = "Form Submitted Successfully";
//           form.reset(); // Reset the form
//         } else {
//           console.log("Error", data);
//           resultElement.textContent = data.message; // Display the error message
//         }
//       } catch (error) {
//         console.error("Request failed", error);
//         resultElement.textContent = "An error occurred. Please try again."; // Display a generic error message
//       }
//     });
//   });
document.getElementById("quoteForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(document.getElementById("quoteForm"));
    const responseMessage = document.getElementById("responseMessage");

    try {
        const response = await fetch("send_mail.php", {
            method: "POST",
            body: formData,
        });

        const result = await response.json();

        if (result.status === "success") {
            responseMessage.textContent = "Thank you! Your request has been submitted.";
            responseMessage.style.color = "green";
        } else {
            responseMessage.textContent = `Error: ${result.message}`;
            responseMessage.style.color = "red";
        }
    } catch (error) {
        responseMessage.textContent = "An error occurred while submitting the form.";
        responseMessage.style.color = "red";
    }
});
