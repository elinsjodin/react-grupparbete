const express = require("express");
const router = express.Router();
const BookingController = require("../controllers/bookingController.js");
const bookingController = new BookingController();
const BookingValidation = require("../validations/bookingValidation.js");
const { validate } = require("express-validation");

router.get("/", (req, res) => {
  res.send("Hello from Bookings");
});

router.post(
  "/",
  validate(BookingValidation.createBookingValidation),
  bookingController.CreateNewBooking
);

module.exports = router;
