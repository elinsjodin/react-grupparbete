require("dotenv").config();
const BookingModel = require("../models/BookingsModel.js");

module.exports = class TestingService {
  async FindBookingByIdForTesting(id) {
    const booking = await BookingModel.findById(id);

    if (!booking) {
      throw new Error("Booking not found");
    } else {
      return booking;
    }
  }
};
