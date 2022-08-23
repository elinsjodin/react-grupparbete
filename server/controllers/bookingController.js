const BookingService = require("../services/bookingService.js");
// const validation = require("../validation/validation.js");

const bookingService = new BookingService();

module.exports = class BookingController {
  async CreateNewBooking(req, res, next) {
    let booking = req.body;

    const result = await bookingService.CreateNewBooking(booking);

    if (result) {
      res.send(result);
    } else {
      res.send("error");
    }
  }

  async GetAllBookings(req, res, next) {
    const results = await bookingService.GetAllBookings();

    if (results) {
      res.send(results);
    } else {
      res.send("error");
    }
  }

  async GetBookingById(req, res, next) {
    const id = req.query.id;

    const result = await bookingService.GetBookingById(id);

    if (result) {
      res.send(result);
    } else {
      res.send("error");
    }
  }

  async DeleteBooking(req, res, next) {
    const id = req.query.id;

    const result = await bookingService.DeleteBooking(id);

    if (result) {
      res.send(result);
    } else {
      res.send("error");
    }
  }

  async EditBooking(req, res, next) {
    const id = req.query.id;

    const booking = req.body;

    const result = await bookingService.EditBooking(id, booking);

    if (result) {
      res.send(result);
    } else {
      res.send("error");
    }
  }
};
