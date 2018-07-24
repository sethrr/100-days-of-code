let $box = $('#box');
function moveBox (e) { 
  TweenMax.to( $box, 2.8, {
    css: { left: e.offsetX,  top: e.offsetY},
    ease: Elastic.easeOut});
}
$(window).on('mousemove', moveBox);

$(window).on('click', moveBox);