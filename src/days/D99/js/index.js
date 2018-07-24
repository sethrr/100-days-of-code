const holes = document.querySelectorAll('.hole');
  const scoreBoard = document.querySelector('.score');
  const trumps = document.querySelectorAll('.trump');
  let over = document.querySelector('.over');
  let btn = document.querySelector('.btn');
  let lastHole;
  let timeUp = false;
  let score = 0;

  function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if (hole === lastHole) {

      return randomHole(holes);
    }
    lastHole = hole;
    return hole;
  }

  function peep() {
    const time = randomTime(200, 1500);
    const hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
      hole.classList.remove('up');
      if (!timeUp) peep();
    }, time);
  }

  function startGame() {
    over.textContent = 'Punch A Trump';
    btn.textContent = 'Get em!';
    score=0;
    scoreBoard.textContent = 'Score:' + '' + 0;
    timeUp = false;
    peep();
    setTimeout(() => {
      timeUp = true;
      btn.textContent = 'Try again!';
      over.textContent = 'Game Over!';
   }, 15000);
}
function bonk(e) {
    if(!e.isTrusted) return; // cheater!
    score++;
    this.parentNode.classList.remove('up');
    scoreBoard.textContent = 'Score:' +' ' + score;
  }

  trumps.forEach(trump => trump.addEventListener('click', bonk));