let api = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=kitten";


function showGif() {
    $.getJSON(api, function(giphy) {
        gifUrl = giphy.data.image_original_url;
        $('#img-container').prepend('<img src="' + gifUrl + '">');
    });
}

function removeGif() {
    $('#img-container img').remove();
}

function changeGif() {
    removeGif();
    showGif();
}
  
$(document).ready(function() {
    showGif();
});

$("button").click(function() {
    changeGif();
});