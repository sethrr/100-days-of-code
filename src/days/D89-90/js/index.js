(function changeCounter(){
  var btns = document.getElementsByClassName('incr-counter');
  var displayContainer = document.getElementById('display');
  var counterElem = document.createElement('h1');
  
  var counter = 0;
  
  function changeVal(e) {
  	counter += parseInt(e.target.value);
    counterElem.innerHTML = counter;
  }
  
  [...btns].forEach( btn => btn.addEventListener('click', changeVal));

  counterElem.innerHTML = "&nbsp;" + counter;
  displayContainer.appendChild(counterElem);
})();