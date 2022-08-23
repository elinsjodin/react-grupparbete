const BookingModel = require("../models/BookingsModel.js");

module.exports = class BookingService {
  async CreateNewBooking(booking) {
    const newBooking = new BookingModel(booking);
    const result = await newBooking.save();

    if (!result) {
      throw new Error("Failed to create new booking");
    } else {
      return result;
    }
  }

  async GetAllBookings() {
    const result = await BookingModel.find({});

    if (!result) {
      throw new Error("Bookings not found");
    } else {
      return result;
    }
  }

  async GetBookingById(id) {
    const result = await BookingModel.findById(id);

    if (!result) {
      throw new Error("Booking not found");
    } else {
      return result;
    }
  }

  async DeleteBooking(id) {
    const result = await BookingModel.findByIdAndDelete(id);

    if (!result) {
      throw new Error("Failed to delete booking");
    } else {
      return result;
    }
  }

  async EditBooking(id, updatedBooking) {
    const result = await BookingModel.findByIdAndUpdate(id, updatedBooking);

    if (!result) {
      throw new Error("Failed to edit booking");
    } else {
      return result;
    }
  }
};
