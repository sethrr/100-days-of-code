const players = ["Moe", "Curly", "Larry"];

const team = players;


const team2 = players.slice();

const team3 = [].concat(players);

const team4 = [...players];
team4[3] = "Shemp";


const team5 = Array.from(players);

const person = {
  name: "Three Stooges",
  age: 80
};

const cap2 = Object.assign({}, person, { number: 99, age: 55 });


const stooges = {
  name: "stooges",
  stooges: 3,
  social: {
    twitter: "@threestooges",
    facebook: "thethree.stooges"
  }
};

const dev = Object.assign({}, stooges);

const dev2 = JSON.parse(JSON.stringify(stooges));