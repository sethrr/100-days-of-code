 const nav = document.querySelector('#main');
 const frame = document.querySelector('.frame');
    let topOfNav = nav.offsetTop;
    function fixNav() {

      if (frame.scrollTop >= topOfNav) {
        document.body.style.paddingTop = nav.offsetHeight + 'px';
       frame.classList.add('fixed-nav');
      } else {
        frame.classList.remove('fixed-nav');
        document.body.style.paddingTop = 0;
      }
    }
    frame.addEventListener('scroll', fixNav);