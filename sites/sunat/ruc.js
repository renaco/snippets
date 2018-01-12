// go to ruc consult (optional)
window.location = 'http://e-consultaruc.sunat.gob.pe/cl-ti-itmrconsruc/jcrS00Alias';

// captcha improvement
var getFrame = document.getElementsByName("leftFrame")[0];
var getImage = getFrame.contentWindow.document.querySelectorAll("[name='imagen']")[0];
var getButton = getFrame.contentWindow.document.querySelectorAll(".form-button")[0];
var getInput = getFrame.contentWindow.document.querySelectorAll("input[name='codigo']")[0];

getImage.parentElement.align = 'right';

getInput.parentElement.width = '';
getInput.style.fontSize = 15 + 'px';
getInput.style.padding = 5 + 'px';
getInput.style.width = 95 + '%';

getButton.style.backgroundColor = 'red';
getButton.style.border = 'none';
getButton.style.color = 'white';
getButton.style.fontSize = 15 + 'px';
getButton.style.fontWeight = 'bold';
getButton.style.paddingBottom = 5 + 'px';
getButton.style.paddingTop = 5 + 'px';
getButton.style.textTransform = 'uppercase';
getButton.style.width = 120 + 'px';
