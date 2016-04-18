function setHeight(){
  var getH = window.innerHeight,
      getW = window.innerWidth,
      getHeader = document.getElementsByClassName('mdl-layout__header-row')[0].offsetHeight,
      getFooter = document.getElementsByClassName('mdl-mini-footer')[0].offsetHeight;
  var giveHeight = (getH - getFooter);
  document.getElementById('wrapper').style.minHeight = giveHeight + 'px';
  console.log(giveHeight);
}

setTimeout(function() {
  setHeight();
}, 100);

window.onresize = resize;

function resize(){
  setHeight();
}