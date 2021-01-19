const specialPage = document.querySelector('.special_page');
const scrollB = document.querySelector('.scroll_by');
const scrollT = document.querySelector('.scroll_to');
const scrollI = document.querySelector('.scroll_into');

// when click special page, print X, Y
specialPage.addEventListener('click', event => {
  console.log(specialPage.getBoundingClientRect());
  console.log(`client : ${event.clientX} ${event.clientY}`);
  console.log(`page : ${event.pageX} ${event.pageY}`);
});

scrollB.addEventListener('click', () => {
  window.scrollBy(0, 100);
});
scrollT.addEventListener('click', () => {
  window.scrollTo(0, 100);
});
scrollI.addEventListener('click', () => {
  const rect = specialPage.getBoundingClientRect();
  //window.scrollBy(0, rect.y);
  specialPage.scrollIntoView();
});
