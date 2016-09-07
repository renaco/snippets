function setHeight(){
  var getH = window.innerHeight,
      getW = window.innerWidth,
      getHeader = document.getElementsByTagName('header').offsetHeight,
      getFooter = document.getElementsByTagName('footer').offsetHeight;
  var giveHeight = (getH - getFooter);
  document.getElementById('container').style.minHeight = giveHeight + 'px';
  console.log(giveHeight);
}

setTimeout(function() {
  setHeight();
}, 100);

window.onresize = resize;

function resize(){
  setHeight();
}
