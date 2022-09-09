const { Schema, model } = require("mongoose");

// Lägg till admin-del
const bookingsSchema = new Schema({
  date: { type: String, required: true },
  time: { type: String, required: true },
  numberOfGuests: { type: Number, required: true },
  // tableAmount: { type: Number, required: true },
  bookedBy: {
    type: Schema.Types.ObjectId,
    ref: "Guests",
    required: true,
  },
});

const BookingsModel = model("Bookings", bookingsSchema);

module.exports = BookingsModel;
