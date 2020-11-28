
const servicesBoxes = document.querySelectorAll('.services__box');

window.addEventListener('scroll', function() {
	var element = servicesBoxes[0];
	var position = element.getBoundingClientRect();

	if(position.top >= 0 && position.bottom <= window.innerHeight) {
        element.classList.add('animate__animated');
        element.classList.add('animate__bounceInLeft');
	}
});

window.addEventListener('scroll', function() {
	var element = servicesBoxes[1];
	var position = element.getBoundingClientRect();

	if(position.top >= 0 && position.bottom <= window.innerHeight) {
        element.classList.add('animate__animated');
        element.classList.add('animate__bounceInLeft');
	}
});

window.addEventListener('scroll', function() {
	var element = servicesBoxes[2];
	var position = element.getBoundingClientRect();

	if(position.top >= 0 && position.bottom <= window.innerHeight) {
        element.classList.add('animate__animated');
        element.classList.add('animate__bounceInLeft');
	}
});