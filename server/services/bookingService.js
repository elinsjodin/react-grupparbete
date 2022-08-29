const BookingModel = require("../models/BookingsModel.js");
const GuestModel = require("../models/GuestsModel.js");

module.exports = class BookingService {
  async CreateNewBooking(booking) {
    console.log("Start create booking");
    // Hitta användaren
    const existingGuest = await GuestModel.findOne(
      // Fråga Sebbe varför loggen spelar roll
      {
        email: booking.bookedBy.email,
      },
      console.log("Existing email:", booking.bookedBy.email)
    );
    console.log("Existing Guest", existingGuest);

    // Om användaren finns, använd dess id i bokningsobjektet
    if (existingGuest) {
      console.log("Hej från if-satsen");

      console.log("ExistingGuestBooking", existingGuest);

      // Använd information från booking för att skapa ett korrekt BookingModel-objekt
      const newBooking = new BookingModel({
        date: booking.date,
        time: booking.time,
        numberOfGuests: booking.numberOfGuests,
        bookedBy: existingGuest._id,
      });
      console.log("Booking", newBooking);

      // Skapa bokning
      const result = await newBooking.save();

      console.log("Result", result);

      if (!result) {
        throw new Error("Failed to create booking");
      } else {
        return result;
      }

      // Om användaren inte finns, skapa den
    } else {
      console.log("No email matched, creating new guest: ");
      const newGuest = new GuestModel({
        name: booking.bookedBy.name,
        email: booking.bookedBy.email,
        phone: booking.bookedBy.phone,
        message: booking.bookedBy.bookingMessage,
      });

      console.log("New Guest", newGuest);

      const newBooking = new BookingModel({
        date: booking.date,
        time: booking.time,
        numberOfGuests: booking.numberOfGuests,
        bookedBy: newGuest._id,
      });

      console.log("New Booking", newBooking);

      await newGuest.save(function (err, doc) {
        if (err) return console.error(err);
        console.log("Document inserted succussfully!");
      });
      console.log("Saved Guest", newGuest);
      const result = await newBooking.save();
      console.log("Result", result);

      if (!result) {
        throw new Error("Failed to create booking");
      } else {
        return result;
      }
    }
  }

  async GetAllBookings() {
    const result = await BookingModel.find({});
    console.log("Found", result);

    // const bookings = await BookingModel.find({}).populate("bookedBy").lean();
    // const guests = GuestModel.find().lean;

    // if (!bookings && !guests)

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
    const result = await BookingModel.findById(id).deleteOne();

    if (!result) {
      throw new Error("Failed to delete booking");
    } else {
      return result;
    }
  }

  async EditBooking(id, updatedBooking) {
    const result = await BookingModel.findById(id, updatedBooking).updateOne();

    if (!result) {
      throw new Error("Failed to edit booking");
    } else {
      return result;
    }
  }
};
