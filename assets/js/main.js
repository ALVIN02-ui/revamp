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
