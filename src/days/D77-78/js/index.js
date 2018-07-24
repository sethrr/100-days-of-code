let weightKG = 85;
let alpha = 2.20462262185;
const weight_lb = document.querySelector('#weight_lb');
const weight_kg = document.querySelector('#weight_kg');

/* --- Function to update the DOM --- */
function update() {
  $(weight_lb).val((weightKG * alpha).toFixed(0));
  $(weight_kg).val(weightKG.toFixed(0));
}

/* --- Function to listen for changes --- */
$(document).ready(function() {
  $(weight_kg).change(function() {
    weightKG = $(weight_kg).val();
    update();
  });
  $(weight_lb).change(function() {
    weightKG = $(weight_lb).val() / alpha;
    update();
  });
});