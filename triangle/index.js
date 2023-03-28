const envelope = document.querySelector('.envelope');
const openButton = document.getElementById('open-button');

openButton.addEventListener('click', () => {
  envelope.classList.add('open');
});
