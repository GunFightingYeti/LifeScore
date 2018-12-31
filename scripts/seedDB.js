const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/LifeScore"
);

const achievementSeed = [
  {
    name: "Get born!",
    description: "Be born into this fantastic glorious world",
    category: "Life",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },
];

const playerSeed = [
  {
    name: "WunderBar",
    score: 12845,
    avatar: "/assets/images/elizabeth.jpg",
    believeability: 6258,
    date: new Date(Date.now())
  },
];

db.Achievement
  .deleteMany({})
  .then(() => db.Achievement.collection.insertMany(achievementSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Players
  .deleteMany({})
  .then(() => db.Players.collection.insertMany(playerSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
