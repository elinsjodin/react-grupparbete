const express = require("express");
const router = express.Router();
const bookingValidation = require("../validations/bookingValidation.js");
const BookingController = require("../controllers/bookingController.js");

const bookingController = new BookingController();

router.get("/", (req, res) => {
  res.send("Hello from bookings page");
});

router.post(
  "/",
  bookingController.CreateNewBooking,
  bookingValidation.validateBooking
);

module.exports = router;
