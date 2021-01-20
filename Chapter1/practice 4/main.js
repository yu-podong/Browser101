const target = document.querySelector('.target');
const showCoor = document.querySelector('.show_coor');
const lineHorizontal = document.querySelector('.line.horizontal');
const lineVertical = document.querySelector('.line.vertical');

document.addEventListener('mousemove', implementTarget);

function implementTarget(event) {
  const x = event.clientX;
  const y = event.clientY;
  moveTarget(x, y);
  printCoordinates(x, y);
  resizeLines(x, y);
}

// move target to client X,Y coordinate
function moveTarget(x, y) {
  target.style.top = `${y}px`;
  target.style.left = `${x}px`;
}

// show coordinate of mouse cursor
function printCoordinates(x, y) {
  showCoor.innerText = `${x}px ${y}px`;
}

// resize line size basee on coordinate
function resizeLines(x, y) {
  lineHorizontal.style.top = `${y}px`;
  lineVertical.style.left = `${x}px`;
}
