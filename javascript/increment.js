var p = document.querySelector('p')

document.addEventListener('keydown', increment, false);

function increment() {
  var number = parseInt(p.innerText);
  number++
  p.innerText = number;
  console.log(parseInt(p.innerText))
}