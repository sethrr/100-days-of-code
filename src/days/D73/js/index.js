(() => {
  function log(str){
    document.write(`${str} `);
  }
  for (let i = 1; i < 50; i++){
    if (i % 3 === 0){
      log('fizz');
    }
    else if (i % 5 === 0){
      log('buzz');
    }
    else if (i % (5 * 3) === 0){
      log('fizzbuzz');
    } else {
      log(i);
    }
  }
})();