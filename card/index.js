const mobil = document.querySelector('.mobil');

mobil.addEventListener('mouseover', function() {
	mobil.style.animationPlayState = 'paused';
});

mobil.addEventListener('mouseout', function() {
	mobil.style.animationPlayState = 'running';
});
