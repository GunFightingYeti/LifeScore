const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/LifeScore", {useNewUrlParser: true});

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
  }, {
    name: "Full Health",
    description: "Recover to full health after being healed by a medical professional ",
    category: "Life",
    worth: 25,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Limbs of Steel",
    description: "Punch/Kick down a tree",
    category: "Violent",
    worth: 20,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Wilson!",
    description: "Light a fire without tools",
    category: "Adventure",
    worth: 25,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Crafty Hands",
    description: "Punch a cow for it's meat",
    category: "Violent",
    worth: 10,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Shake Hands with Greatness",
    description: "Shake hands with Jackie Chan or Bear Grylls",
    category: "Social",
    worth: 10000,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Hallelujah",
    description: "Have your first kiss",
    category: "Life",
    worth: 10,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Hold Me",
    description: "Give a fantastic hug",
    category: "Social",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Hand Fishing",
    description: "Catch a fish with your bare hands",
    category: "Skills",
    worth: 15,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Giving Back",
    description: "Volunteer at a shelter",
    category: "Social",
    worth: 10,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Stabby Stab",
    description: "Spear a fish",
    category: "Skills",
    worth: 10,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "I'm Flying",
    description: "Go skydiving",
    category: "Adventure",
    worth: 10,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Fisticuffs",
    description: "Get into a consensual fist fight",
    category: "Violent",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Successful Fisticuffs",
    description: "Win a consensual fist fight",
    category: "Violent",
    worth: 10,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "The Hills Are Alive",
    description: "Learn to play a song on an instrument",
    category: "Skills",
    worth: 15,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Is That a Bear?",
    description: "Grow a real beard",
    category: "Life",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Only Two Wheels",
    description: "Learn to ride a bike",
    category: "Skills",
    worth: 10,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Bang Bang",
    description: "Shoot a gun for the first time",
    category: "Violent",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Erectus Indeed",
    description: "Learn to walk",
    category: "Life",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Sploosh",
    description: "Poop in a toilet",
    category: "Life",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Am I The Pope?",
    description: "Poop in the woods",
    category: "Adventure",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Tastes Like Chicken",
    description: "Eat a Reptile",
    category: "Food",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "This is Chicken",
    description: "Eat a Bird",
    category: "Food",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Crunchy Chicken",
    description: "Eat a Bug/Insect",
    category: "Food",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Under Water Chicken",
    description: "Eat an Amphibian",
    category: "Food",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Big Chicken",
    description: "Eat a Mammal",
    category: "Food",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Chicken-n-Gills",
    description: "Eat a Fish",
    category: "Food",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Space Chicken?",
    description: "Eat an Alien",
    category: "Food",
    worth: 100,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "So Juicy Sweet",
    description: "Catch a fish and eat it raw",
    category: "Food",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "100%",
    description: "Complete a video game to 100%",
    category: "Entertainment",
    worth: 15,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Does Anyone Have a Steak",
    description: "Get punched in the face",
    category: "Violent",
    worth: 10,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Most Wanted",
    description: "Drive over 100 MPH",
    category: "Adventure",
    worth: 10,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "I've Traveled",
    description: "Visit 2 Countries",
    category: "Adventure",
    worth: 10,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "I Like To Travel",
    description: "Visit 5 Countries",
    category: "Adventure",
    worth: 30,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "I Know My Way Around",
    description: "Visit 10 Countries",
    category: "Adventure",
    worth: 40,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "I've Seen a Thing or Fifteen",
    description: "Visit 15 Countries",
    category: "Adventure",
    worth: 50,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "I Am Phineas Phogg",
    description: "Visit 20 Countries",
    category: "Adventure",
    worth: 100,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "There are Ants on My Face",
    description: "Sleep out under the stars",
    category: "Adventure",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "I Can Do Anything",
    description: "Control a dream",
    category: "Life",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "So Fancy",
    description: "Drive a luxury sports car",
    category: "Adventure",
    worth: 20,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "I Feel Sick",
    description: "Complete a 1000 burpee challenge solo",
    category: "Skills",
    worth: 30,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "I Am A Weapon",
    description: "Earn a black belt in a martial art",
    category: "Skills",
    worth: 100,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "It's a Pandemic",
    description: "Make a viral YouTube video",
    category: "Social",
    worth: 25,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Make it Rain",
    description: "Win money",
    category: "Entertainment",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Where's My Ruler",
    description: "Teach a class with at least 5 people",
    category: "Social",
    worth: 10,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Crack-a-lackin",
    description: "Break a bone",
    category: "Life",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Second to Last Milestone",
    description: "Turn 21 years old",
    category: "Life",
    worth: 10,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "It's a Human!",
    description: "Give birth to a child",
    category: "Life",
    worth: 100,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Rawr",
    description: "Get hit on by a 'Cougar'",
    category: "Social",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Cheers",
    description: "Have a stranger pay for your drink/meal",
    category: "Food",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Squidward?",
    description: "Get a tattoo",
    category: "Adventure",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Don't Burn Your Face",
    description: "Light a cigar in a campfire",
    category: "Adventure",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "I Can See My House Fromt Here",
    description: "Fly an aircraft",
    category: "Skills",
    worth: 25,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Now I'm Broke",
    description: "Buy your first house",
    category: "Life",
    worth: 175,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "What's That Smell",
    description: "Own a car",
    category: "Life",
    worth: 15,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "I Do",
    description: "Get married to a person",
    category: "Life",
    worth: 50,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "It's Alive",
    description: "Have a child",
    category: "Life",
    worth: 50,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "I Can't Take Anymore",
    description: "Laugh until you cry",
    category: "Social",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "It's Time for Adventure",
    description: "Have an adventure, grab your friends and go to very distant lands",
    category: "Adventure",
    worth: 10,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "It's so Good",
    description: "Watch a TV show all the way through, twice",
    category: "Entertainment",
    worth: 10,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "It's Like Looking in a Mirror",
    description: "Find your clone/doppelganger",
    category: "Social",
    worth: 10,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "You Can Dance if You Wanna",
    description: "Have a lot of fun but also take safety seriously",
    category: "Entertainment",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "World Record",
    description: "Earn a Guinness world record",
    category: "Skills",
    worth: 25,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Holiday Shots!",
    description: "Pound a shot of eggnog",
    category: "Food",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Drop the Ball",
    description: "Ring in the New Year with alcohol and someone special",
    category: "Social",
    worth: 10,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Why???",
    description: "Get stabbed...in the hand...by yourself",
    category: "Violent",
    worth: 10,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Fancy as Fudge",
    description: "Rock a top hat/cane/monocle combo",
    category: "Entertainment",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "I Can't Breathe",
    description: "Summit Everest",
    category: "Adventure",
    worth: 500,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Pointy Punk",
    description: "Have a mohawk",
    category: "Entertainment",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "It Kills the Grass",
    description: "Yell at someone to 'Get off your lawn!'",
    category: "Social",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "There is No Spoon",
    description: "Break a brick with your hand (Without breaking your hand)",
    category: "Skills",
    worth: 10,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Science!",
    description: "Get electrocuted by 110v or higher",
    category: "Violent",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Who Needs Chopsticks",
    description: "Catch a fly with your bare hands",
    category: "Skills",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "The Barbie",
    description: "Grill an meat for the tasting",
    category: "Food",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Dim the Lights",
    description: "Have sex for the first time",
    category: "Life",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Brew Master/Mistress",
    description: "Make your own alcohol",
    category: "Food",
    worth: 10,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "On Top of the World",
    description: "Climb a 14,000ft mountain",
    category: "Adventure",
    worth: 10,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "That Was Tough",
    description: "Complete a Tough Mudder",
    category: "Adventure",
    worth: 10,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "I Am Jack Bauer",
    description: "Stay up for 24 hours straight",
    category: "Life",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Boom De Gasa!",
    description: "Fire an RPG or Rocket Launcher",
    category: "Violent",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Breaking New Ground(s)",
    description: "Climb inside a tank",
    category: "Adventure",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "1,000,000 Scoville",
    description: "Eat a 1,000,000+ Scoville pepper",
    category: "Food",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Get a Life",
    description: "Pass 500 hours of play time in a single game",
    category: "Entertainment",
    worth: 15,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "My Hero",
    description: "Save someone's life",
    category: "Life",
    worth: 100,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Call me Simon",
    description: "Visit a castle",
    category: "Adventure",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Salty",
    description: "Swim in the ocean",
    category: "Adventure",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "No Floaties for Me",
    description: "Learn to swim",
    category: "Skills",
    worth: 10,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "That was Close",
    description: "Swim with a shark",
    category: "Adventure",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Hang Fin",
    description: "Ride a shark",
    category: "Adventure",
    worth: 10,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "This is Probably Illegal",
    description: "Base jump",
    category: "Adventure",
    worth: 20,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "I Still Have All My Fingers",
    description: "Whittle something 'good'",
    category: "Skills",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Your Highness",
    description: "Meet a King or Queen",
    category: "Social",
    worth: 20,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Sir Lady",
    description: "Be knighted by a royal",
    category: "Social",
    worth: 25,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Where did I Go?",
    description: "Join the military",
    category: "Adventure",
    worth: 10,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Little Gold Man",
    description: "Win an Oscar",
    category: "Skills",
    worth: 20,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Making the World Better",
    description: "Win a Noble Prize",
    category: "Skills",
    worth: 25,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Dance Safely",
    description: "Dance if you wanna and leave your friends behind",
    category: "Entertainment",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Cha Cha Real Smooth",
    description: "Dance with a stranger",
    category: "Social",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Empty Orchestra",
    description: "Sing Karaoke",
    category: "Social",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Front Row",
    description: "Go to a concert",
    category: "Entertainment",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, { 
    name: "Call Me Later, Maybe",
    description: "Get someone's phone number",
    category: "Social",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "It's Full of Stars",
    description: "Go into space",
    category: "Skills",
    worth: 1000,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Step Back from that Ledge",
    description: "Cut ties with all the lies you've been living in",
    category: "Fun",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Graduate",
    description: "Graduate High School",
    category: "Life",
    worth: 10,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Graduate Again",
    description: "Graduate College",
    category: "Life",
    worth: 15,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "So Many Colors",
    description: "Taste the rainbow",
    category: "Food",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Shuffle Off",
    description: "Pass on from this beautiful life of natural causes",
    category: "Life",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Out for a Rip are Ya Bud?",
    description: "Go out for a rip with yer buds (Hang out with friends)",
    category: "Social",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "This One's on Me",
    description: "Buy a round of drinks for someone else",
    category: "Food",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Free Drinks",
    description: "Have someone buy you a round of drinks",
    category: "Food",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Surpise!",
    description: "Throw a surprise party for a friend",
    category: "Social",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Words, Words, Words",
    description: "Read a book",
    category: "Skills",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Warren Peace",
    description: "Read a book with at least 700 pages",
    category: "Skills",
    worth: 10,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Lace Em Up",
    description: "Tie your own shoes",
    category: "Skills",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Darn those socks!",
    description: "Teach yourself a new skill from the internet",
    category: "Skills",
    worth: 10,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Keep Yourself in Stitches",
    description: "Learn to knit or crochet",
    category: "Skills",
    worth: 10,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "I Am Great and British",
    description: "Bake a cake",
    category: "Food",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Handy Hands",
    description: "Fix something in your house",
    category: "Skills",
    worth: 10,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Micro",
    description: "Get yourself a dirty job",
    category: "Adventure",
    worth: 15,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Debt Free Since '93",
    description: "Pay off all your student loans",
    category: "Life",
    worth: 25,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "SANTA!!!",
    description: "Have an epic snowball fight",
    category: "Fun",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Be Our Guest",
    description: "Ask the dishes",
    category: "Fun",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Flimsy Noir",
    description: "Watch a classic black and white movie",
    category: "Entertainment",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Food-a-pult",
    description: "Successfully eat with chopsticks",
    category: "Food",
    worth: 10,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Face Plant",
    description: "Trip and fall unintetionally",
    category: "Life",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Penmanship",
    description: "Write a paper letter by hand and mail it to someone",
    category: "Fun",
    worth: 10,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Pomp Hey!",
    description: "Visit a volcano",
    category: "Adventure",
    worth: 10,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Whirlybird",
    description: "Ride in a helicopter",
    category: "Adventure",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Too Late?",
    description: "Make a joke about Abraham Lincoln in a theater",
    category: "Fun",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Laugh or Cry",
    description: "See your favorite comic perform live",
    category: "Entertainment",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "I Am Arthur",
    description: "Sit at a round table",
    category: "Fun",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Put Down Your Phone",
    description: "Get off social media for a day and go outside",
    category: "Life",
    worth: 30,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Patty Cake",
    description: "Make yourself some bread from scratch",
    category: "Food",
    worth: 10,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Gobble Gobble Mr. Tucker",
    description: "Cook a holiday turkey and carve it yourself",
    category: "Food",
    worth: 10,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Early Nerd Gets the Firm",
    description: "Pay off your taxes at least four weeks before the deadline",
    category: "Life",
    worth: 10,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Move Jeep, Get Out the Way!",
    description: "Get your drivers license",
    category: "Life",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Are You Still Watching?",
    description: "Watch a trilogy (or more) of movies in one sitting",
    category: "Entertainment",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "U B Stylin",
    description: "Wear of peice of clothing that you made yourself",
    category: "Skills",
    worth: 10,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "It's Beautiful!",
    description: "Have artwork that you created, displayed publicly",
    category: "Skills",
    worth: 10,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Mmm, Tastes So Fresh",
    description: "Eat a meal composed entirely out of ingredients you grew/made yourself",
    category: "Food",
    worth: 10,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Take That MyKEA",
    description: "Build a peice of furniture that you made from scratch",
    category: "Skills",
    worth: 10,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Build-A-Cabin",
    description: "Build a log cabin by hand",
    category: "Skills",
    worth: 30,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Helping Hand",
    description: "Go on a missions trip and help someone else",
    category: "Social",
    worth: 15,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Fancy Feet",
    description: "Learn how to dance",
    category: "Skills",
    worth: 10,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "No Business like Snow Business",
    description: "Shovel someone else's driveway/sidewalk",
    category: "Social",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Pass It On",
    description: "Pay for the food or drink of the person behind you in line",
    category: "Social",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Start Your Day Right",
    description: "Make your bed",
    category: "Adventure",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Look at that View",
    description: "Have 'lunch' on a mountain",
    category: "Adventure",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Audio Media Circus",
    description: "Listen to a vinyl record, cassette tape, CD and digital media in one day",
    category: "Entertainment",
    worth: 10,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Video Media Circus",
    description: "Watch a VHS, DVD, BluRay and 4K movie in one day",
    category: "Entertainment",
    worth: 10,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "Money Bags",
    description: "Get a pay raise at your job",
    category: "Life",
    worth: 5,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }, {
    name: "The Scrooge McDuck",
    description: "Dive head first into a pool of coins",
    category: "Fun",
    worth: 20,
    passed: false,
    saved: false,
    belief: 0,
    date: new Date(Date.now())
  }
  // , {
  //   name: "",
  //   description: "",
  //   category: "",
  //   worth: ,
  //   passed: false,
  //   saved: false,
  //   belief: 0,
  //   date: new Date(Date.now())
  // }
];

const playerSeed = [
  {
    name: "GunFightingYeti",
    score: 5378,
    avatar: "https://scontent.fapa1-1.fna.fbcdn.net/v/t1.0-9/39522543_10217308436645968_7509642345873145856_o.jpg?_nc_cat=108&_nc_ht=scontent.fapa1-1.fna&oh=cd97dc1d1fa0f6850543812865b4a248&oe=5CD445EB",
    believability: 457,
    friends: [
        "WunderBare",
        "Knurtts",
        "Scarab27",
        "Drizzt172",
        "WriterManda",
        "GenZip",
        "Krontime",
        "Gummybearx3",
        "SassyCat"
    ],
    date: new Date(Date.now())
  },
  {
    name: "WunderBare",
    score: 12845,
    avatar: "https://scontent.fapa1-1.fna.fbcdn.net/v/t31.0-8/16665956_10154220639121516_4389822730891899068_o.jpg?_nc_cat=106&_nc_ht=scontent.fapa1-1.fna&oh=b7df74878244bd09937bcb8057c4c44d&oe=5CB76167",
    believability: 6258,
    friends: [
        "GunFightingYeti",
        "Knurtts",
        "Scarab27",
        "Drizzt172",
        "WriterManda",
        "Krontime",
        "Gummybearx3",
        "SassyCat"
    ],
    date: new Date(Date.now())
  },
  {
    name: "Knurtts",
    score: 6934,
    avatar: "https://scontent.fapa1-1.fna.fbcdn.net/v/t1.0-9/18520002_10154621365097151_8995648720660444281_n.jpg?_nc_cat=103&_nc_ht=scontent.fapa1-1.fna&oh=2d70746329814fc14456a1636bff537d&oe=5CB35C0E",
    believability: 825,
    friends: [
        "WunderBare",
        "GunFightingYeti",
        "WriterManda",
        "Krontime",
        "SassyCat"
    ],
    date: new Date(Date.now())
  },
];

db.Achievement
  .deleteMany({})
  .then(() => db.Achievement.collection.insertMany(achievementSeed))
  .then(data => {
      console.log(data.result.n + " records inserted!");
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
