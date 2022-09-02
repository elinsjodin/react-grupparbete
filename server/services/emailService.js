const nodemailer = require("nodemailer");
require("dotenv").config();
const bookingModel = require("../models/BookingsModel.js");
const GuestService = require("../services/guestService.js");
const guestService = new GuestService();
const img = require("fs").readFileSync("public/images/images-11.jpeg");

module.exports = class EmailService {
  async sendConfirmationEmail(bookingConfirmation) {
    try {
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD,
        },
      });
      console.log({ bookingConfirmation });
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
              <p><b>Number of guests: </b>${bookingConfirmation.numberOfGuests}</p>
              <p><b>Name in booking: </b>${bookingConfirmation.bookedBy.name}</p>
              <p><b>Phone: </b>${bookingConfirmation.bookedBy.phone}</p>
              <p><b>Message for us: </b>${bookingConfirmation.bookedBy.message}</p>
              <div><img src="cid:images-11.jpeg"/></div>
              </div>
              <p>Click <a href="http://localhost:3000/bookings/cancel/${bookingConfirmation.id}"><span>here</span></a> to cancel your booking.<p>
              <h3>Other questions regarding your booking? Contact us <a href="http://localhost:3000/contact"><span>here</span></a>.</h3>
              </body>
              </html>`,
        attachments: [
          {
            filename: "images-11.jpeg",
            content: img,
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
      console.log("Confirmation-email failed", error);
    }
  }

  async SendCanceledBookingEmail(booking) {
    const guest = await guestService.GetGuestById(booking.bookedBy);
    try {
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
        to: guest.email,
        subject: "Booking Canceled",
        html: `<html>
            <body>
            <h2>Hi ${guest.name}, we have now canceled your booking at Sorkins for ${booking.date} at ${booking.time} for ${booking.numberOfGuests} people.
            </h2>
            <div><img src="cid:images-11.jpeg"/></div>
            <p>If you wish to make a new reservation with us, please click on <a href="http://localhost:3000/bookings"><span>this link</span></a>, hope to see you soon!<p>
            </body>
            </html>`,
        attachments: [
          {
            filename: "images-11.jpeg",
            content: img,
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
      console.log("Cancel-booking-email failed", error);
    }
  }

  async handleCancelBookingFromEmail(bookingId) {
    const result = await bookingModel.findById(bookingId).deleteOne();
    console.log(result);

    if (!result) {
      throw new Error("Failed to cancel booking");
    } else {
      return result;
    }
  }
};
