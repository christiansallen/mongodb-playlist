const mocha = require("mocha");
const assert = require("assert");
const MarioChar = require("./../models/mariochars");

//Describe Tests
describe("saving records", function() {
  //Create Tests
  it("saves a record to a database", function(done) {
    let char = new MarioChar({
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

  //Next Test
});
