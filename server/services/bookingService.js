require("dotenv").config();
const BookingModel = require("../models/BookingsModel.js");
const GuestModel = require("../models/GuestsModel.js");

module.exports = class BookingService {
  async CreateNewBooking(booking) {
    const existingGuest = await GuestModel.findOne({
      email: booking.bookedBy.email,
    });

    if (existingGuest) {
      const newBooking = new BookingModel({
        date: booking.date,
        time: booking.time,
        numberOfGuests: booking.numberOfGuests,
        bookedBy: existingGuest._id,
      });

      const result = await newBooking.save();

      if (!result) {
        throw new Error("Failed to create booking");
      } else {
        return result;
      }
    } else {
      const newGuest = new GuestModel({
        name: booking.bookedBy.name,
        email: booking.bookedBy.email,
        phone: booking.bookedBy.phone,
        message: booking.bookedBy.bookingMessage,
      });

      const newBooking = new BookingModel({
        date: booking.date,
        time: booking.time,
        numberOfGuests: booking.numberOfGuests,
        bookedBy: newGuest._id,
      });

      newGuest.save(function (err, doc) {
        if (err) return console.error(err);
        console.log("Document inserted succussfully!");
      });
      const result = await newBooking.save();

      if (!result) {
        throw new Error("Failed to create booking");
      } else {
        return result;
      }
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

  // async GetBookingsByDate(date) {
  //   const result = await BookingModel.find({ date: date });

  //   console.log("found date from date", result);

  //   if (!result) {
  //     throw new Error("Bookings not found");
  //   } else {
  //     return result;
  //   }
  // }

  async GetBookingById(id) {
    const booking = await BookingModel.findById(id);

    if (!booking) {
      throw new Error("Booking not found");
    } else {
      return booking;
    }
  }

  async GetBookingByDate(date) {
    const dateInBooking = await BookingModel.find(date);
    console.log("Date", dateInBooking);

    if (!dateInBooking) {
      throw new Error("Date not found");
    } else {
      return dateInBooking;
    }
  }

  async EditBooking(id, booking) {
    const result = await BookingModel.findById(id).updateOne(booking);

    if (!result) {
      throw new Error("Failed to edit booking");
    } else {
      return result;
    }
  }

  async DeleteBooking(id) {
    const result = await BookingModel.findById(id).deleteOne();

    if (!result) {
      throw new Error("Failed to delete booking");
    } else {
      return result;
    }
  }
};
