const mongoose = require("../database");

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    unique: true,
    require: true,
    lowercase: true,
  },
  phone: {
    type: String,
    require: true,
  },
  image: {
    nameImage: String,
    size: Number,
    key: String,
    url: String,
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
});

const Contact = mongoose.model("Contact", ContactSchema);

module.exports = Contact;
