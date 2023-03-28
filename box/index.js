const box = document.querySelector('.box');

box.addEventListener('mouseover', function() {
	box.style.animationPlayState = 'paused';
});

box.addEventListener('mouseout', function() {
	box.style.animationPlayState = 'running';
});
