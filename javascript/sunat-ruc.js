var getFrame = document.getElementsByName('leftFrame')[0];
var getImage = getFrame.contentWindow.document.querySelectorAll("[name='imagen']")[0];
var getButton = getFrame.contentWindow.document.querySelectorAll(".form-button")[0];
var getInput = getFrame.contentWindow.document.querySelectorAll("input[name='codigo']")[0];

getImage.parentElement.align = 'right';

getInput.parentElement.width = '';
getInput.style.fontSize = 15 + 'px';
getInput.style.width = 95 + '%';
getInput.style.padding = 5 + 'px';

getButton.style.border = 'none';
getButton.style.paddingTop = 5 + 'px';
getButton.style.paddingBottom = 5 + 'px';
getButton.style.width = 120 + 'px';
getButton.style.color = 'white';
getButton.style.backgroundColor = 'red';
getButton.style.fontSize = 15 + 'px';
getButton.style.textTransform = 'uppercase';
