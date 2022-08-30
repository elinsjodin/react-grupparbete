const BookingModel = require("../models/BookingsModel.js");
const GuestModel = require("../models/GuestsModel.js");
const nodemailer = require("nodemailer");
require("dotenv").config();
// const image = require("../public/images/images-11.jpeg");

module.exports = class BookingService {
  async CreateNewBooking(booking) {
    console.log("Start create booking");
    // Hitta användaren
    const existingGuest = await GuestModel.findOne(
      // Fråga Sebbe varför loggen spelar roll
      {
        email: booking.bookedBy.email,
      },
      console.log("Email:", booking.bookedBy.email)
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

  async sendConfirmationEmail(bookingConfirmation) {
    try {
      console.log("Nodemailer");

      console.log("Confirmed Booking", bookingConfirmation);

      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD,
        },
      });

      const message = {
        from: '"Sorkins", <restaurantsorkins@gmail.com>',
        to: bookingConfirmation.bookedBy.email,
        subject: "Booking Confirmed",
        html: `<html>
          <body>
          <h2>Thank you ${bookingConfirmation.bookedBy.name} for your booking at Sorkins, we are so excited to see you!
          </h2>
          <div>
          <p><b>Date: </b>${bookingConfirmation.date}</p>
          <p><b>Time: </b>${bookingConfirmation.time}</p>
          <p><b>How many: </b>${bookingConfirmation.numberOfGuests}</p>
          <p><b>Name in booking: </b>${bookingConfirmation.bookedBy.name}</p>
          <p><b>Email: </b>${bookingConfirmation.bookedBy.email}</p>
          <p><b>Phone: </b>${bookingConfirmation.bookedBy.phone}</p>
          <p><b>Message for us: </b>${bookingConfirmation.bookedBy.bookingMessage}</p>
          <div><img src="cid:images-11.jpeg"/></div>
          </div>
          <h3>Questions regarding your booking? Send us your question by answering this email.</h3>
          </body>
          </html>`,
        attachments: [
          {
            filename: "images-11.jpeg",
            path: __dirname + "/../public/images/images-11.jpeg",
            cid: "images-11.jpeg",
          },
        ],
      };
      transporter.sendMail(message, (err, info) => {
        if (err) {
          console.log("Email not sent, error occurs: ", err);
        } else {
          console.log(info, "Message sent: ", info.messageId);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
};

// host: dns.resolve.toString("smtp.etheral.email"),
// host: "google",
// service: "gmail",

// logger: true,
// tls: { rejectUnauthorized: false },
// "liliane.koss@ethereal.email"
// "ZhUe6jqnhaGF4rXmyE"
//  "smtp.etheral.email"
// port: 465,
// secure: true,
// requireTLS: true,

// transporter.sendMail(message, (err, info) => {
//   // console.log(error);
//   console.log("Message sent: ", message.messageId);
// });

// transporter.sendMail(message, (err, data) => {
//   if (err) {
//     console.log("Email not sent, error occurs", err);
//   } else {
//     console.log(data, "Message sent: ", info.messageId);
//   }
// });
