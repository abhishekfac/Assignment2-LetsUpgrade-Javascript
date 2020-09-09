let team = [
  {
    name: "Aakash",
    age: 27,
    country: "India",
    hobbies: ["reading", "travling"],
  },
  {
    name: "Samule",
    age: 31,
    country: "Germany",
    hobbies: ["reading", "travling"],
  },
  {
    name: "Anna",
    age: 24,
    country: "Italy",
    hobbies: ["reading", "travling", "swimming"],
  },
  {
    name: "Sandra",
    age: 28,
    country: "Finland",
    hobbies: ["running", "eating"],
  },
  {
    name: "Arman",
    age: 25,
    country: "India",
    hobbies: ["travling", "swimming"],
  },
];
team.forEach(function (a) {
  console.log(a);
});
console.log("//displaying all object having age<30...............");
let resultArray = [];
for (let i = 0; i < team.length; i++) {
  if (team[i].age < 30) {
    resultArray.push(team[i]);
  }
}
resultArray.forEach(function (x) {
  console.log(x);
});
console.log("//displaying all objects having country India...........");
let resultArray2 = [];
for (let i = 0; i < team.length; i++) {
  if (team[i].country == "India") {
    resultArray2.push(team[i]);
  }
}
resultArray2.forEach(function (z) {
  console.log(z);
});
