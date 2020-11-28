
const servicesBoxes = document.querySelectorAll('.services__box'),
appearingText 		= document.querySelector('.subtitle');

window.addEventListener('scroll', function() {
	const element = servicesBoxes[0];
	const position = element.getBoundingClientRect();

	if(position.top < 500 && position.top > 0 ) {
        element.classList.add('animate__animated');
        element.classList.add('animate__bounceInLeft');
	}
});

window.addEventListener('scroll', function() {
	const element = servicesBoxes[1];
	const position = element.getBoundingClientRect();

	if(position.top < 500 && position.top > 0 ) {
        element.classList.add('animate__animated');
        element.classList.add('animate__bounceInLeft');
	}
});

window.addEventListener('scroll', function() {
	const element = servicesBoxes[2];
	const position = element.getBoundingClientRect();

	if(position.top < 500 && position.top > 0 ) {
        element.classList.add('animate__animated');
        element.classList.add('animate__bounceInLeft');
	}
});

const writeText = () => {
	let string = 'FRONTEND DEVELOPER AND MECHATRONICS ENGINEER';

	for(let char of string){
		appearingText.innerHTML += char;
	}
}

writeText();

