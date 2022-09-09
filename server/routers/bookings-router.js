const express = require("express");
const router = express.Router();
const bookingValidation = require("../validations/bookingValidation.js");
const BookingController = require("../controllers/bookingController.js");

const bookingController = new BookingController();

router.get("/", bookingController.GetAllBookings);

router.post(
  "/",
  bookingController.CreateNewBooking,
  bookingValidation.validateBooking
);

router.delete("/cancel/:id", bookingController.CancelBooking);

// Router för testning i Cypress
router.get("/cancel/test", bookingController.FindBookingByIdForTesting);

module.exports = router;
