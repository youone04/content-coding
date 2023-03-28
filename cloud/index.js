const cloudBody = document.querySelector('.cloud-body');
const cloud = document.querySelector('.cloud');

window.addEventListener('resize', () => {
  cloudBody.style.width = cloud.offsetWidth * 0.8 + 'px';
});