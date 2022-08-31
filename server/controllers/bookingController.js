const bookingValidation = require("../validations/bookingValidation.js");
const BookingService = require("../services/bookingService.js");
const EmailService = require("../services/emailService.js");
const bookingService = new BookingService();
const emailService = new EmailService();

module.exports = class BookingController {
  async CreateNewBooking(req, res, next) {
    try {
      const bookingDto = {
        date: req.body.date,
        time: req.body.time,
        numberOfGuests: req.body.numberOfGuests,
        bookedBy: {
          name: req.body.bookedBy.name,
          email: req.body.bookedBy.email,
          phone: req.body.bookedBy.phone,
          bookingMessage: req.body.bookedBy.message,
        },
      };

      bookingValidation.validateBooking(bookingDto);
      console.log("BookingObject", bookingDto);

      const result = await bookingService.CreateNewBooking(bookingDto);
      console.log("Hej från controller");

      await emailService.sendConfirmationEmail(bookingDto);
      console.log("Email sent");

      res.send(result);
      console.log("Resultat skickat");
    } catch (error) {
      next({ status: error.status, message: error.message });
    }
  }

  async GetAllBookings(req, res, next) {
    try {
      console.log("Getting bookings...");
      //recive a post from /bookings
      const results = await bookingService.GetAllBookings();
      //send a response to the client
      res.send(results);
    } catch (error) {
      next({ status: error.status, message: error.message });
    }
  }

  async GetBookingById(req, res, next) {
    try {
      const id = req.params.id;
      const result = await bookingService.GetBookingById(id);
      res.send(result);
    } catch (error) {
      next({ status: error.status, message: error.message });
    }
  }

  async EditBooking(req, res, next) {
    try {
      const id = req.params.id;
      const booking = req.body;

      bookingValidation.editBookingValidation(booking);

      bookingService.EditBooking(id, booking).then((dataInBooking) => {
        if (!dataInBooking) {
          res
            .status(400)
            .send({ message: `Unable to update booking with id: ${id}` });
        } else {
          console.log("data", dataInBooking);

          res.send(dataInBooking);
        }
      });
    } catch (error) {
      console.log("Error msg: ", error);
      next({ status: error.status, message: error.message });
    }
  }

  async EditGuest(req, res, next) {
    try {
      const id = req.params.id;
      const guest = req.body;

      bookingValidation.editGuestValidation(guest);

      bookingService.EditGuest(id, guest).then((guestDataInBooking) => {
        if (!guestDataInBooking) {
          res
            .status(400)
            .send({ message: `Unable to update guest with id: ${id}` });
        } else {
          res.send(guestDataInBooking);
        }
      });
    } catch (error) {
      next({ status: error.status, message: error.message });
    }
  }

  async DeleteBooking(req, res, next) {
    try {
      const id = req.params.id;
      const result = await bookingService.DeleteBooking(id);
      res.send(result);
    } catch (error) {
      next({ status: error.status, message: error.message });
    }
  }
};
