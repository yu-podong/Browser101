// main
const tag = document.querySelector('.tag');

showWindowSize();
window.addEventListener('resize', () => showWindowSize());

// Function Declaration
function showWindowSize() {
  tag.innerHTML = `
  window.screen : ${window.screen.width} ${window.screen.height}<br/>
  window.outer : ${window.outerWidth} ${window.outerHeight}<br/>
  window.inner : ${window.innerWidth} ${window.innerHeight}<br/>
  documentElement.client : ${document.documentElement.clientWidth} ${document.documentElement.clientHeight}
  `;
}
