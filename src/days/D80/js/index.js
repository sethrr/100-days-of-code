const divs = document.querySelectorAll('div');
  const button = document.querySelector('button');
  function logText(e) {
   
  }
  divs.forEach(div => div.addEventListener('click', logText, {
    capture: false,
    once: true
  }));
 