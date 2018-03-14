window.location.href = '//cel.reniec.gob.pe/valreg/valreg.do;jsessionid=97657851cf89de598885097455b9acec28df21b597b.mALvn6iL-B9zpAzzmMTBpQ8Iq6iUaNaMa3D3lN4PagSLa34Iah8K-xuL-AeSa69zaMSLa6aPa64Obh0QawSHc30Ka2bEaAjzawTwp65ynh4IqAjIokjx-ArJmwTKngaSahqTbhiOaNuxf2bQmkLMnkqxn6jAmljGr5XDqQLvpAe_';

// remove block input 
document.getElementsByName('nuDni')[0].removeAttribute('readonly');
document.forms[0].nuDni.value = '42357118';
function todo() {
  return true;
}
document.oncontextmenu = document.onselectstart = document.ondragstart = todo;