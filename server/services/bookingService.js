const BookingModel = require("../models/BookingsModel.js");

module.exports = class BookingService {
  async CreateNewBooking(booking) {
    const newBooking = new BookingModel(booking);

    return await newBooking.save();
  }

  async GetAllBookings() {
    return await BookingModel.find({});
  }

  async GetBookingById(id) {
    return await BookingModel.findById(id);
  }

  async DeleteBooking(id) {
    return await BookingModel.findByIdAndDelete(id);
  }

  async EditBooking(id, updatedBooking) {
    return await BookingModel.findByIdAndUpdate(id, updatedBooking);
  }
};
