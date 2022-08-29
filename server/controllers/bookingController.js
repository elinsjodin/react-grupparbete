const BookingService = require("../services/bookingService.js");
const bookingValidation = require("../validations/bookingValidation.js");

const bookingService = new BookingService();

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

      const booking = bookingDto;

      console.log("Booking", booking);

      const result = await bookingService.CreateNewBooking(booking);

      console.log("Hej från controller");

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
      const id = req.query.id;
      const result = await bookingService.GetBookingById(id);
      res.send(result);
    } catch (error) {
      next({ status: error.status, message: error.message });
    }
  }

  async DeleteBooking(req, res, next) {
    try {
      const id = req.query.id;
      const result = await bookingService.DeleteBooking(id);
      res.send(result);
    } catch (error) {
      next({ status: error.status, message: error.message });
    }
  }

  async EditBooking(req, res, next) {
    try {
      const id = req.query.id;
      const booking = req.body;
      bookingValidation.editBookingValidation(booking);
      const result = await bookingService.EditBooking(id, booking);
      res.send(result);
    } catch (error) {
      next({ status: error.status, message: error.message });
    }
  }

  async GetGuestByEmail(req, res, next) {
    try {
      const id = req.query.id;
      const email = req.body.email;
      const result = await bookingService.CompareGuestEmail(id, email);
      res.send(result);
    } catch (error) {
      next({ status: error.status, message: error.message });
    }
  }
};
