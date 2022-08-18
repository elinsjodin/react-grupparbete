const mongoose = require("mongoose");

const guestSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  bookingMessage: { type: String, required: false },
});

const GuestsModel = mongoose.model("Guests", guestSchema);

module.exports = GuestsModel;
