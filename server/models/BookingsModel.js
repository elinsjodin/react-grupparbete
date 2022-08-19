const { Schema, model } = require("mongoose");

// Create a schema for the bookings that will be stored in the database
const bookingsSchema = new Schema({
  date: { type: Date, required: true },
  time: { type: String, required: true },
  numberOfGuests: { type: Number, required: true, default: 1 },
  bookedBy: {
    type: Schema.Types.ObjectId,
    ref: "Guests",
    required: true,
  },
});

const BookingsModel = model("Bookings", bookingsSchema);

module.exports = BookingsModel;
