const { Schema, default: mongoose } = require("mongoose");

// creates a schema for guest info that will be stored in the database
const guestSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  bookingMessage: String,
});

const GuestsModel = mongoose.model("Guests", guestSchema);

module.exports = GuestsModel;
