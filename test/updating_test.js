const assert = require("assert");
const MarioChar = require("./../models/mariochars");

//Describe Tests
describe("updating records", function() {
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
  it("updates a record from the database", function(done) {
    //Async function
    MarioChar.findOneAndUpdate({ name: "Luigi" }, { name: "Mario" }).then(
      function() {
        //char comes from line 6 & 9
        MarioChar.findOne({ _id: char._id }).then(function(result) {
          assert(result.name === "Mario");
          done();
        });
      }
    );
  });

  //Next Test
});
