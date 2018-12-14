const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const achievementSchema = new Schema({
  name: { type: String, required: true },
  description:  { type: String, required: true },
  category: { type: String, required: true },
  worth: {type: Number, required: true},
  passed: {type: Boolean, required: true, default: false},
  saved:  {type: Boolean, required: true, default: false},
  date: { type: Date, default: Date.now }
});

const Achievement = mongoose.model("Achievement", achievementSchema);

module.exports = Achievement;
