const mongoose = require("mongoose");

mongoose
  .connect("mongodb://mongo/contact_book", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("🛢 Successfully connect to MongoDB");
  })
  .catch((error) => {
    console.log("Connection error", error);
    process.exit();
  });

mongoose.Promise = global.Promise;

module.exports = mongoose;
