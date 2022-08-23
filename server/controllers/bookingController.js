const BookingService = require("../services/bookingService.js");

const bookingService = new BookingService();

module.exports = class BookingController {
  async CreateNewBooking(req, res, next) {
    try {
      let booking = req.body;
      const result = await bookingService.CreateNewBooking(booking);
      res.send(result);
    } catch (error) {
      next({ status: 400, message: error.message });
    }
  }

  async GetAllBookings(req, res, next) {
    try {
      const results = await bookingService.GetAllBookings();
      res.send(results);
    } catch (error) {
      next({ status: 400, message: error.message });
    }
  }

  async GetBookingById(req, res, next) {
    try {
      const id = req.query.id;
      const result = await bookingService.GetBookingById(id);
      res.send(result);
    } catch (error) {
      next({ status: 400, message: error.message });
    }
  }

  async DeleteBooking(req, res, next) {
    try {
      const id = req.query.id;
      const result = await bookingService.DeleteBooking(id);
      res.send(result);
    } catch (error) {
      next({ status: 400, message: error.message });
    }
  }

  async EditBooking(req, res, next) {
    try {
      const id = req.query.id;
      const booking = req.body;
      const result = await bookingService.EditBooking(id, booking);
      res.send(result);
    } catch (error) {
      next({ status: 400, message: error.message });
    }
  }
};
