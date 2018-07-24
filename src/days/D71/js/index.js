var rotation = 0;
var img_index = 0;

var img_array = [
  "https://theocdsquirrel.files.wordpress.com/2013/11/con-air-nicolas-cage-2_400.jpg", 
  "https://i.pinimg.com/736x/93/e1/07/93e107b99948524e2ce03aee7144323e--nicolas-cage.jpg", 
  "http://s.pikabu.ru/images/big_size_comm/2012-06_6/13408155396045.jpg", 
  "https://www.iceposter.com/thumbs/G336602_b.jpg"
];

//Loads the first image that comes in the array
$(document).ready(function(){
  $('.slide-1').css({
    'background': 'url(' + img_array[img_index] + ')',
    'background-size': 'contain',
    'background-repeat': 'no-repeat'
  });
  counter++;
});

//When someone clicks the next but load the next image
$('#next-btn').click(function(){
  rotation += 0;
  img_index++;
  if(img_index == img_array.length){
    img_index = 0;
  }
  
  $('.slide-1').css({
    'background': 'url(' + img_array[img_index] + ')',
    'background-size': 'contain',
    'background-repeat': 'no-repeat'
  });
  
  $('.img-container').css({
    'transform': 'rotateY(' + rotation + 'deg)'
  });
});

//When some clicks the back button load the previous pic
$('#back-btn').click(function(){
  rotation -= 360;
  img_index--;
  if(img_index == -1){
    img_index = img_array.length - 1;
  }
  
  $('.slide-1').css({
    'background': 'url(' + img_array[img_index] + ')',
    'background-size': 'contain',
    'background-repeat': 'no-repeat'
  });
  
  $('.img-container').css({
    'transform': 'rotateY(' + rotation + 'deg)'
  });
});