const mongoose = require("mongoose");

//Runs just once
before(function(done) {
  //Connect to mongodb. /testing is a foobar name. If mongo doesn't recognize that name, it will create one on its own.
  mongoose.connect("mongodb://localhost/testing", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });
  mongoose.connection
    .once("open", function() {
      console.log("connected");
      done();
    })
    .on("error", function() {
      console.log("connection error:", error);
    });
});

//Drop the char collection before each test
//Runs before each test
beforeEach(function(done) {
  mongoose.connection.collections.mariochars.drop(function() {
    //This is for handling async functions.
    done();
  });
});
