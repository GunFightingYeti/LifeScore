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
    name: "Full ",
    description: "Recover to full health after being healed by a medical professional ",
    category: "Life",
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
    category: "Adventure",
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
    category: "Skills",
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
    category: "Skills",
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
    category: "Life",
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
    category: "Life",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "Am I The Pope?",
    description: "Poop in the woods",
    category: "Adventure",
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
    category: "Adventure",
    worth: 10,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "I Like To Travel",
    description: "Visit 5 COuntries",
    category: "Adventure",
    worth: 30,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "I Know My Way Around",
    description: "Visit 10 Countries",
    category: "Adventure",
    worth: 40,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "I've Seen a Thing or Fifteen",
    description: "Visit 15 Countries",
    category: "Adventure",
    worth: 50,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "I Am Phineas Phogg",
    description: "Visit 20 Countries",
    category: "Adventure",
    worth: 100,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "There are Ants on My Face",
    description: "Sleep out under the stars",
    category: "Adventure",
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
    category: "Skills",
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
    name: "You Can Dance if You Wanna",
    description: "Have a lot of fun but also take safety seriously",
    category: "Entertainment",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "World Record",
    description: "Earn a Guinness world record",
    category: "Skills",
    worth: 25,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "Holiday Shots!",
    description: "Pound a shot of eggnog",
    category: "Food",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "Drop the Ball",
    description: "Ring in the New Year with alcohol and someone special",
    category: "Social",
    worth: 10,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "Why???",
    description: "Get stabbed...in the hand...by yourself",
    category: "Violent",
    worth: 10,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "Fancy as Fudge",
    description: "Rock a top hat/cane/monocle combo",
    category: "Entertainment",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "I Can't Breathe",
    description: "Summit Everest",
    category: "Adventure",
    worth: 500,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "Pointy Punk",
    description: "Have a mohawk",
    category: "Entertainment",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "It Kills the Grass",
    description: "Yell at someone to 'Get off you lawn!'",
    category: "Social",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "There is No Spoon",
    description: "Break a brick with your hand (Without breaking your hand)",
    category: "Skills",
    worth: 10,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "Science!",
    description: "Get electrocuted by 110v or higher",
    category: "Violent",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "Who Needs Chopsticks",
    description: "Catch a fly with your bare hands",
    category: "Skills",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "The Barbie",
    description: "Grill an meat for the tasting",
    category: "Food",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "Dim the Lights",
    description: "Have sex for the first time",
    category: "Life",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "Brew Master/Mistress",
    description: "Make your own alcohol",
    category: "Food",
    worth: 10,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "On Top of the World",
    description: "Climb a 14,000ft mountain",
    category: "Adventure",
    worth: 10,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "That Was Tough",
    description: "Complete a Tough Mudder",
    category: "Adventure",
    worth: 10,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "I Am Jack Bauer",
    description: "Stay up for 24 hours straight",
    category: "Life",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "Boom De Gasa!",
    description: "Fire an RPG or Rocket Launcher",
    category: "Violent",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "Breaking New Ground(s)",
    description: "Climb inside a tank",
    category: "Adventure",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "1,000,000 Scoville",
    description: "Eat a 1,000,000+ Scoville pepper",
    category: "Food",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "Get a Life",
    description: "Pass 500 hours of play time in a single game",
    category: "Entertainment",
    worth: 15,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "My Hero",
    description: "Save someone's life",
    category: "Life",
    worth: 100,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "Call me Simon",
    description: "Visit a castle",
    category: "Adventure",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "Salty",
    description: "Swim in the ocean",
    category: "Adventure",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "No Floaties for Me",
    description: "Learn to swim",
    category: "Skills",
    worth: 10,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "That was Close",
    description: "Swim with a shark",
    category: "Adventure",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "Hang Fin",
    description: "Ride a shark",
    category: "Adventure",
    worth: 10,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "This is Probably Illegal",
    description: "Base jump",
    category: "Adventure",
    worth: 20,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "I Still Have All My Fingers",
    description: "Whittle something 'good'",
    category: "Skills",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "Your Highness",
    description: "Meet a King or Queen",
    category: "Social",
    worth: 20,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "Sir Lady",
    description: "Be knighted by a royal",
    category: "Social",
    worth: 25,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "Where did I Go?",
    description: "Join the military",
    category: "Adventure",
    worth: 10,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "Little Gold Man",
    description: "Win an Oscar",
    category: "Skills",
    worth: 20,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "Making the World Better",
    description: "Win a Noble Prize",
    category: "Skills",
    worth: 25,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "Dance Safely",
    description: "Dance if you wanna and leave your friends behind",
    category: "Entertainment",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "Cha Cha Real Smooth",
    description: "Danec with a stranger",
    category: "Social",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "Empty Orchestra",
    description: "Sing Karaoke",
    category: "Social",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "Front Row",
    description: "Go to a concert",
    category: "Entertainment",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "Call Me Later, Maybe",
    description: "Get someone's phone number",
    category: "Social",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "It's Full of Stars",
    description: "Go into space",
    category: "Skills",
    worth: 1000,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "Step Back from that Ledge",
    description: "Cut ties with all the lies you've been living in",
    category: "Skills",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "Graduate",
    description: "Graduate High School",
    category: "Life",
    worth: 10,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "Graduate Again",
    description: "Graduate College",
    category: "Life",
    worth: 15,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "So Many Colors",
    description: "Taste the rainbow",
    category: "Food",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "Shuffle Off",
    description: "Pass on from this beautiful life of natural causes",
    category: "Life",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "Out for a Rip are Ya Bud?",
    description: "Go out for a rip with yer buds (Hang out with friends)",
    category: "Social",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "This One's on Me",
    description: "Buy a round of drinks for someone else",
    category: "Food",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "Free Drinks",
    description: "Have someone buy you a round of drinks",
    category: "Fod",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  },{
    name: "Surpise!",
    description: "Through a surprise party for a friend",
    category: "Social",
    worth: 5,
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
