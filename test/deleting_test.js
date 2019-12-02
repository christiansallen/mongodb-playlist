const assert = require("assert");
const MarioChar = require("./../models/mariochars");

//Describe Tests
describe("deleting records", function() {
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
  it("deletes a record from the database", function(done) {
    //Async function
    MarioChar.findOneAndRemove({ name: "Luigi" }).then(function() {
      MarioChar.findOne({ name: "Luigi" }).then(function(result) {
        assert(result === null);
        done();
      });
    });
  });

  //Next Test
});
