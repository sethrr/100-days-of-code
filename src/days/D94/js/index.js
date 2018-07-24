$('.btn').click(function() {
  getCupID();
});
function getCupID () {
$.ajax({
type: "GET",
url: "http://api.open-notify.org/iss-now",
dataType: "json",
success: function(data) {
    let long = data.iss_position.longitude;
    let lat = data.iss_position.latitude;
    $('.text').text('Longitude: ' + long + ', ' + 'Latitude: ' + ' ' + lat)
},
error: $('.text').text('Connection to NASA failed')
});
}