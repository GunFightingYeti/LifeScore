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
    name: "WunderBare",
    score: 12845,
    avatar: "/assets/images/elizabeth.jpg",
    believability: 6258,
    date: new Date(Date.now())
  },
  {
    name: "Knurtts",
    score: 10481,
    avatar: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/28/284ece0b03cdbdb48bd023dfcb743ce54d10cf19_full.jpg",
    believability: 543,
    date: new Date(Date.now())
  },
  {
    name: "GunFightingYeti",
    score: 8354,
    avatar: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/9b/9bf768ca860b792c90f257378b9e77f6f9cdaa17_full.jpg",
    believability: 314,
    date: new Date(Date.now())
  },
  {
    name: "WunderBare",
    score: 12845,
    avatar: "/assets/images/elizabeth.jpg",
    believability: 6258,
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
