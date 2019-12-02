const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Create schema and model
//Schema is individual structure of each record in model
//Model is collection of records/schema
const MarioCharSchema = new Schema({
  name: String,
  weight: Number
});

const MarioChar = mongoose.model("mariochar", MarioCharSchema);

module.exports = MarioChar;

//In other files it will be used like: const myChar = new MarioChar({name, weight})
