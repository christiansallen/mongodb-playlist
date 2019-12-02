const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Create schema and model
//Schema is individual structure of each record in model
//Model is collection of records/schema
const BookSchema = new Schema({
  title: String,
  pages: Number
});

const AuthorSchema = new Schema({
  name: String,
  age: Number,
  books: [BookSchema]
});

//mariochar will automatically turn into mariochars because of mongoose
const Author = mongoose.model("author", AuthorSchema);

module.exports = Author;

//In other files it will be used like: const myChar = new MarioChar({name, weight})
