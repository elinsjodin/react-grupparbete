const { Schema, model } = require("mongoose");

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
