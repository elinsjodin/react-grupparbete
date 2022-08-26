const { default: mongoose } = require("mongoose");
const BookingModel = require("../models/BookingsModel.js");
const GuestModel = require("../models/GuestsModel.js");
const { guestSchema } = require("../models/GuestsModel.js");

module.exports = class BookingService {
  async CreateNewBooking(booking) {
    console.log("Start create booking");
    // Hitta användaren
    const existingGuest = await GuestModel.findOne({
      email: booking.bookedBy.email,
    });
    // .populate("bookedBy");
    console.log("Guest: ", existingGuest);
    //
    // Om användaren finns, använd dess id i bokningsobjektet
    if (existingGuest.length > 0) {
      for (let i = 0; i < existingGuest.length; i++) {
        console.log("ExistingGuestBooking", existingGuest);
        // Använd information från booking för att skapa ett korrekt BookingModel-objekt
        const newBooking = new BookingModel({
          date: booking.date,
          time: booking.time,
          numberOfGuests: booking.numberOfGuests,
          bookedBy: existingGuest[i]._id,
        });
        console.log(newBooking);
        // Skapa bokning
        const result = await newBooking.save();
        console.log("Result: ", result);

        // Om användaren inte finns, skapa den
      }
    } else {
      console.log("New Guest: ", newGuest);

      const newGuest = new GuestModel({
        guest: new mongoose.Types.ObjectId(),
        name: booking.bookedBy.name,
        email: booking.bookedBy.email,
        phone: booking.bookedBy.phone,
        message: booking.bookedBy.bookingMessage,
      });

      await newGuest.save();

      // await newBooking.push(newGuest);

      // await newBooking.save();
    }
  }

  //   BookingModel.findOne({
  //     email: booking.bookedBy.email,
  //   })
  //     .populate({ path: "bookedBy" })
  //     .exec(async (err, existingGuest) => {
  //       console.log(booking.bookedBy);

  //       // Om användaren finns, använd dess id i bokningsobjektet
  //       if (existingGuest) {
  //         console.log("ExistingGuest", existingGuest);
  //         // Använd information från booking för att skapa ett korrekt BookingModel-objekt
  //         const newBooking = new BookingModel({
  //           date: booking.date,
  //           time: booking.time,
  //           numberOfGuests: booking.numberOfGuests,
  //           bookedBy: booking.bookedBy,
  //           // [{
  //           // guestId: existingGuest._id,
  //           // name: existingGuest.bookedBy.name,
  //           // email: existingGuest.bookedBy.email,
  //           // phone: existingGuest.bookedBy.phone,
  //           // message: existingGuest.bookedBy.bookingMessage,
  //           // }],
  //         });
  //         // Skapa bokning
  //         await newBooking.save();

  //         // Om användaren inte finns, skapa den
  //       } else if (!existingGuest) {
  //         console.log("New Guest", newGuest);
  //         const newGuest = new GuestModel({
  //           name: booking.bookedBy.name,
  //           email: booking.bookedBy.email,
  //           phone: booking.bookedBy.phone,
  //           message: booking.bookedBy.bookingMessage,
  //         });

  //         await newGuest.save();

  //         await newBooking.bookedBy.push(newGuest);

  //         await newBooking.save();
  //       } else {
  //         throw new Error("Failed to create new booking");
  //       }
  //     });
  // }

  // BookingModel.findOne({})
  //   .populate("bookedBy")
  //   .exec((err, guest) => {
  //     console.log(guest);
  //   });

  // new GuestModel({
  //   name: booking.bookedBy.name,
  //   email: booking.bookedBy.email,
  //   phone: booking.bookedBy.phone,
  //   message: booking.bookedBy.bookingMessage,
  // }),

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
