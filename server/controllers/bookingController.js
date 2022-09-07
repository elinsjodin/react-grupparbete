const bookingValidation = require("../validations/bookingValidation.js");
const BookingService = require("../services/bookingService.js");
const EmailService = require("../services/emailService.js");
const bookingService = new BookingService();
const emailService = new EmailService();

module.exports = class BookingController {
  async CreateNewBooking(req, res, next) {
    try {
      const bookingDto = req.body;

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
      const results = await bookingService.GetAllBookings();

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

  // async GetBookingByDate(req, res, next) {
  //   try {
  //     const date = req.params.date;
  //     const result = await bookingService.GetBookingById(date);

  //     if (result) {
  //       res.status(200).json(result);
  //       console.log(result);
  //     } else {
  //       res.status(404).json({ message: "No bookings found" });
  //     }
  //   } catch (error) {
  //     next({ status: error.status, message: error.message });
  //   }
  // }

  async GetBookingByDate(req, res, next) {
    try {
      const date = req.body.date;
      const result = await bookingService.GetBookingByDate(date);
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
