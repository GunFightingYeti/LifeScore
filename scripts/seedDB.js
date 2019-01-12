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
  },{
    name: "Full Health",
    description: "Recover to full health after being healed by a medical professional ",
    category: "Health",
    worth: 25,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "Limbs of Steel",
    description: "Punch/Kick down a tree",
    category: "Violent",
    worth: 20,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "Wilson!",
    description: "Light a fire without tools",
    category: "Nature",
    worth: 25,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "Crafty Hands",
    description: "Punch a cow for it's meat",
    category: "Violent",
    worth: 10,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "Shake Hands with Greatness",
    description: "Shake hands with Jackie Chan or Bear Grylls",
    category: "Social",
    worth: 1000,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "Hallelujah",
    description: "Have your first kiss",
    category: "Life",
    worth: 10,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "Hold Me",
    description: "Give a fantastic hug",
    category: "Social",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "Hand Fishing",
    description: "Catch a fish with your bare hands",
    category: "Nature",
    worth: 15,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "Giving Back",
    description: "Volunteer at a shelter",
    category: "Social",
    worth: 10,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "Stabby Stab",
    description: "Spear a fish",
    category: "Nature",
    worth: 10,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "I'm Flying",
    description: "Go skydiving",
    category: "Adventure",
    worth: 10,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "Fisticuffs",
    description: "Get into a consensual fist fight",
    category: "Violent",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "Successful Fisticuffs",
    description: "Win consensual fist fight",
    category: "Violent",
    worth: 10,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "The Hills Are Alive",
    description: "Learn to play a song on an instrument",
    category: "Skills",
    worth: 15,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "Is That a Bear?",
    description: "Grow a real beard",
    category: "Health",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "Only Two Wheels",
    description: "Learn to ride a bike",
    category: "Skills",
    worth: 10,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "Bang Bang",
    description: "Shoot a gun for the first time",
    category: "Violent",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "Erectus Indeed",
    description: "Learn to walk",
    category: "Life",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "Sploosh",
    description: "Poop in a toilet",
    category: "Health",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "Am I The Pope?",
    description: "Poop in the woods",
    category: "Health",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "Tastes Like Chicken",
    description: "Eat a Reptile",
    category: "Food",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "This is Chicken",
    description: "Eat a Bird",
    category: "Food",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "Crunchy Chicken",
    description: "Eat a Bug/Insect",
    category: "Food",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "Under Water Chicken",
    description: "Eat an Amphibian",
    category: "Food",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "Big Chicken",
    description: "Eat a Mammal",
    category: "Food",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "Chicken-n-Gills",
    description: "Eat a Fish",
    category: "Food",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "Space Chicken?",
    description: "Eat an Alien",
    category: "Food",
    worth: 100,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "So Juicy Sweet",
    description: "Catch a fish and eat it raw",
    category: "Food",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "100%",
    description: "Complete a video game to 100%",
    category: "Entertainment",
    worth: 15,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "Does Anyone Have a Steak",
    description: "Get punched in the face",
    category: "Violent",
    worth: 10,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "Most Wanted",
    description: "Drive over 100 MPH",
    category: "Adventure",
    worth: 10,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "I've Traveled",
    description: "Visit 2 COuntries",
    category: "Travel",
    worth: 10,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "I Like To Travel",
    description: "Visit 5 COuntries",
    category: "Travel",
    worth: 30,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "I Know My Way Around",
    description: "Visit 10 Countries",
    category: "Travel",
    worth: 40,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "I've Seen a Thing or Fifteen",
    description: "Visit 15 Countries",
    category: "Travel",
    worth: 50,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "I Am Phineas Phogg",
    description: "Visit 20 Countries",
    category: "Travel",
    worth: 100,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "There are Ants on My Face",
    description: "Sleep out under the stars",
    category: "Nature",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "I Can Do Anything",
    description: "Control a dream",
    category: "Life",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "So Fancy",
    description: "Drive a luxury sports car",
    category: "Adventure",
    worth: 20,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "I Feel Sick",
    description: "Complete a 1000 burpee challenge solo",
    category: "Health",
    worth: 30,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "I Am A Weapon",
    description: "Earn a black belt in a martial art",
    category: "Skills",
    worth: 100,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "It's a Pandemic",
    description: "Make a viral YouTube video",
    category: "Social",
    worth: 25,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "Make it Rain",
    description: "Win money",
    category: "Entertainment",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "Where's My Ruler",
    description: "Teach a class with at least 5 people",
    category: "Social",
    worth: 10,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "Crack-a-lackin",
    description: "Break a bone",
    category: "Life",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "Second to Last Milestone",
    description: "Turn 21 years old",
    category: "Life",
    worth: 10,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "It's a Human!",
    description: "Give birth to a child",
    category: "Life",
    worth: 100,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "Rawr",
    description: "Get hit on by a 'Cougar'",
    category: "Social",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "Cheers",
    description: "Have a stranger pay for your drink/meal",
    category: "Food",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "Squidward?",
    description: "Get a tattoo",
    category: "Adventure",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "Don't Burn Your Face",
    description: "Light a cigar in a campfire",
    category: "Adventure",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "I Can See My House Fromt Here",
    description: "Fly an aircraft",
    category: "Skills",
    worth: 25,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "Now I'm Broke",
    description: "Own a house",
    category: "Life",
    worth: 175,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "What's That Smell",
    description: "Own a car",
    category: "Life",
    worth: 15,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "I Do",
    description: "Get married to a person",
    category: "Life",
    worth: 50,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "It's Alive",
    description: "Have a child",
    category: "Life",
    worth: 50,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "I Can't Take Anymore",
    description: "Laugh until you cry",
    category: "Social",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "It's Time for Adventure",
    description: "Have an adventure, grab your friends and go to very distant lands",
    category: "Adventure",
    worth: 10,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "It's so Good",
    description: "Watch a TV show all the way through, twice",
    category: "Entertainment",
    worth: 10,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "It's Like Looking in a Mirror",
    description: "Find your clone/doppelganger",
    category: "Social",
    worth: 10,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "",
    description: "",
    category: "",
    worth: ,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "",
    description: "",
    category: "",
    worth: ,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "",
    description: "",
    category: "",
    worth: ,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "",
    description: "",
    category: "",
    worth: ,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "",
    description: "",
    category: "",
    worth: ,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "",
    description: "",
    category: "",
    worth: ,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "",
    description: "",
    category: "",
    worth: ,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "",
    description: "",
    category: "",
    worth: ,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "",
    description: "",
    category: "",
    worth: ,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "",
    description: "",
    category: "",
    worth: ,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "",
    description: "",
    category: "",
    worth: ,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "",
    description: "",
    category: "",
    worth: ,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "",
    description: "",
    category: "",
    worth: ,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "",
    description: "",
    category: "",
    worth: ,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "",
    description: "",
    category: "",
    worth: ,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "",
    description: "",
    category: "",
    worth: ,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "",
    description: "",
    category: "",
    worth: ,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "",
    description: "",
    category: "",
    worth: ,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "",
    description: "",
    category: "",
    worth: ,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "",
    description: "",
    category: "",
    worth: ,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "",
    description: "",
    category: "",
    worth: ,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "",
    description: "",
    category: "",
    worth: ,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "",
    description: "",
    category: "",
    worth: ,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "",
    description: "",
    category: "",
    worth: ,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "",
    description: "",
    category: "",
    worth: ,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "",
    description: "",
    category: "",
    worth: ,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "",
    description: "",
    category: "",
    worth: ,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "",
    description: "",
    category: "",
    worth: ,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "",
    description: "",
    category: "",
    worth: ,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "",
    description: "",
    category: "",
    worth: ,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "",
    description: "",
    category: "",
    worth: ,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "",
    description: "",
    category: "",
    worth: ,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "",
    description: "",
    category: "",
    worth: ,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "",
    description: "",
    category: "",
    worth: ,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "",
    description: "",
    category: "",
    worth: ,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "",
    description: "",
    category: "",
    worth: ,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "",
    description: "",
    category: "",
    worth: ,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "",
    description: "",
    category: "",
    worth: ,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "",
    description: "",
    category: "",
    worth: ,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }
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
