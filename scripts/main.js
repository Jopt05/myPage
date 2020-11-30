
const servicesBoxes = document.querySelectorAll('.services__box'),
appearingText 		= document.querySelector('.subtitle'),
linkToForm			= document.querySelector('.goToForm'),
form				= document.querySelector(".form__box");

const shoWServicesBox = ( el ) => {
	const element = el;
	const position = element.getBoundingClientRect();

	if(position.top < 500 && position.top > 0 ) {
        element.classList.add('animate__animated');
        element.classList.add('animate__bounceInLeft');
	}
}

window.addEventListener('scroll', function() {
	servicesBoxes.forEach(shoWServicesBox)
});

linkToForm.addEventListener('click', () => {
	form.classList.add('animate__animated');
	form.classList.add('animate__bounceInLeft');
	form.classList.add('solid');
})

const writeText = () => {
	let string = 'FRONTEND DEVELOPER AND MECHATRONICS ENGINEER';

	for(let char of string){
		appearingText.innerHTML += char;
	}
}

writeText();

