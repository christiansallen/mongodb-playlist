const assert = require("assert");
const mongoose = require("mongoose");
const Author = require("../models/authors");

describe("Nesting tests", function() {
  beforeEach(function(done) {
    mongoose.connection.collections.authors.drop(() => {
      done();
    });
  });

  it("Creates an author with sub-documents", function(done) {
    let pat = new Author({
      name: "Patrick Rothfuss",
      books: [{ title: "Name of the Wind", pages: 400 }]
    });

    pat.save().then(function() {
      Author.findOne({ name: "Patrick Rothfuss" }).then(function(record) {
        assert(record.books.length === 1);
        done();
      });
    });
  });

  it("Add a book to an existing author", function(done) {
    let pat = new Author({
      name: "Patrick Rothfuss",
      books: [{ title: "Name of the Wind", pages: 400 }]
    });

    pat.save().then(function() {
      Author.findOne({ name: "Patrick Rothfuss" }).then(function(record) {
        //add a book to the books array
        record.books.push({ title: "Wise Man's Fear", pages: 500 });
        record.save().then(() => {
          Author.findOne({ name: "Patrick Rothfuss" }).then(result => {
            assert(result.books.length === 2);
            done();
          });
        });
      });
    });
  });
});
