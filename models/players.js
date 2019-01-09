const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playerSchema = new Schema({
  name: { type: String, required: true},
  score: {type: Number, required: true},
  avatar: {type: String, required: true, default: "/assets/images/placeholder.jpg"},
  friends: {type: Array, required: true},
  date: { type: Date, default: Date.now }
});

const Player = mongoose.model("Player", playerSchema);

module.exports = Player;