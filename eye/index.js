const mata = document.querySelector('.mata');

mata.addEventListener('mouseover', function() {
	mata.style.animation = 'none';
	mata.style.backgroundColor = 'white';
});

mata.addEventListener('mouseout', function() {
	mata.style.animation = 'blink 1s infinite';
	mata.style.backgroundColor = 'black';
});
