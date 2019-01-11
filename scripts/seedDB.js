const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/LifeScore", { useNewUrlParser: true });

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
    name: "WunderBare",
    score: 12845,
    avatar: "/assets/images/elizabeth.jpg",
    believability: 6258,
    friends: ["GunFightingYeti", "Knurtts", "Scarab27", "Drizt172", "WriterManda", "GenZip", "Krontime", "Gummybearx3", "SassyCat"],
    date: new Date(Date.now())
  },
];

db.Achievement
  .deleteMany({})
  .then(() => db.Achievement.collection.insertMany(achievementSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    // process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Player
  .deleteMany({})
  .then(() => db.Player.collection.insertMany(playerSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
