const assert = require("assert");
const MarioChar = require("./../models/mariochars");

//Describe Tests
describe("finding records", function() {
  let char;

  beforeEach(function(done) {
    char = new MarioChar({
      name: "Luigi",
      weight: "50"
    });
    //Save method is used on each instance/schema whereas find method is used on the entire model
    //mongoose gives us the save mehtod, we're already connected to the mongo database. This is an async request.
    char.save().then(() => {
      //Is new only until it is saved in the database. Once it's saved to the db, it's not new anymore.
      assert(char.isNew === false);
      done();
    });
  });

  //Create Tests
  it("finds a record from the database", function(done) {
    MarioChar.findOne({ name: "Luigi" }).then(function(result) {
      assert(result.name === "Luigi");
      done();
    });
  });

  it("finds a record by ID from the database", function(done) {
    //ROBOmongo names it _id
    MarioChar.findOne({ _id: char._id }).then(function(result) {
      //_id is an object, not a string. Can't compare two objects. Need to change them toString()
      assert(result._id.toString() === char._id.toString());
      done();
    });
  });

  //Next Test
});
