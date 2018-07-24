const h1 = document.querySelectorAll("h1");

let fonts = [
  "Arial Bold",
  "Aldrich",
  "Eater",
  "Pacifico",
  "Questrial",
  "Shrikhand",
  "Wingdings",
  "Gloria+Hallelujah"
];

h1.forEach(function(element) {
  element.style.fontFamily = `${
    fonts[Math.floor(Math.random() * fonts.length)]
  }`;
});