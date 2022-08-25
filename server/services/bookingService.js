const BookingModel = require("../models/BookingsModel.js");
const GuestModel = require("../models/GuestsModel.js");

module.exports = class BookingService {
  async CreateNewBooking(booking) {
    console.log("Start create booking");
    // Hitta användaren
    const existingGuest = await BookingModel.find({
      email: booking.bookedBy.email,
    });
    // Om användaren finns, använd dess id i bokningsobjektet
    if (existingGuest) {
      console.log("ExistingGuest", existingGuest);
      // Använd information från booking för att skapa ett korrekt BookingModel-objekt
      const newBooking = new BookingModel({
        date: booking.date,
        time: booking.time,
        numberOfGuests: booking.numberOfGuests,
        bookedBy: existingGuest._id,
      });
      // Skapa bokning
      await newBooking.save();
      // Om användaren inte finns, skapa den
    } else if (!existingGuest) {
      console.log("New Guest", newGuest);
      const newGuest = new GuestModel({
        name: booking.bookedBy.name,
        email: booking.bookedBy.email,
        phone: booking.bookedBy.phone,
        message: booking.bookedBy.bookingMessage,
      });

      await newGuest.save();

      await newBooking.bookedBy.push(newGuest);

      await newBooking.save();

      // BookingModel.findOne({})
      //   .populate("Guests")
      //   .exec((err, guest) => {
      //     console.log(guest);
      //   });
    } else {
      throw new Error("Failed to create new booking");
    }
  }

  // const bookings = [];

  // for (const booking of bookings) {
  //   if (guest === req.body.email) {
  //     bookings.push(booking);
  //   }
  // }

  // const newBooking = req.body;
  // await newBooking.save();

  // const {email} = req.body.email;

  // const guest = await BookingModel.get

  // // const guest = await GetSpecificGuest();

  // booking.bookedBy.email

  // if (guest === req.body.email) {
  //   new BookingModel(booking);
  // }

  // // GuestModel.findOne({ email }, (err, guest) => {
  // //   if (guest) {
  // //     new BookingModel(booking);
  // //   } else {
  // //     throw new Error("Failed to create new booking");
  // //   }
  // // }),

  //
  //   if(!guest) {
  //     new GuestModel(guest)
  //   }

  // if (!result) {
  //   throw new Error("Failed to create new booking");
  // } else {
  //   return result;
  // }

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

  // async CompareGuestEmail(id, email) {
  //   const result = await BookingModel.findOne(id, email);

  //   if (!result) {
  //     throw new Error("Could not find guest");
  //   } else {
  //     return result;
  //   }
  // }
};
