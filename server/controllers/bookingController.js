const bookingValidation = require("../validations/bookingValidation.js");
const BookingService = require("../services/bookingService.js");
const GuestService = require("../services/guestService.js");
const EmailService = require("../services/emailService.js");
const bookingService = new BookingService();
const guestService = new GuestService();
const emailService = new EmailService();

module.exports = class BookingController {
  async CreateNewBooking(req, res, next) {
    try {
      const bookingDto = req.body;
      console.log("Req.body", req.body);

      bookingValidation.validateBooking(bookingDto);

      const result = await bookingService.CreateNewBooking(bookingDto);

      bookingDto.id = result._id;

      await emailService.sendConfirmationEmail(bookingDto);

      res.send(result);
    } catch (error) {
      next({ status: error.status, message: error.message });
    }
  }

  async GetAllBookings(req, res, next) {
    try {
      //recive a post from /bookings
      const results = await bookingService.GetAllBookings();
      //send a response to the client
      res.send(results);
    } catch (error) {
      next({ status: error.status, message: error.message });
      console.log(error);
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

  async GetGuestById(req, res, next) {
    try {
      const id = req.params.id;
      const result = await emailService.GetGuestById(id);
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

      guestService.EditGuest(id, guest).then((guestDataInBooking) => {
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

  async ConfirmationEmail(req, res, next) {
    try {
      const bookingId = req.params.id;

      const result = await emailService.sendConfirmationEmail(bookingId);

      res.send(result);
    } catch (error) {
      next({ status: error.status, message: error.message });
    }
  }

  async CancelBooking(req, res, next) {
    const bookingId = req.params.id;
    const booking = await bookingService.GetBookingById(bookingId);

    if (booking) {
      try {
        const result = await emailService.handleCancelBookingFromEmail(
          bookingId
        );

        await emailService.SendCanceledBookingEmail(booking);

        res.send(result);
      } catch (error) {
        next({ status: error.status, message: error.message });
      }
    }
  }
};
