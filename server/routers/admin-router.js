const express = require("express");
const router = express.Router();
const bookingValidation = require("../validations/bookingValidation.js");
const BookingController = require("../controllers/bookingController.js");

const bookingController = new BookingController();

// bookings will be an array of objects with the properties defined in the BookingsModel.js file
router.get("/", bookingController.GetAllBookings);
// route to get id and to then delete it
router.delete("/", bookingController.DeleteBooking);
// Hämta specifik bokning
router.get("/:id", bookingController.GetBookingById);
// Redigera bokning
router.put(
  "/edit/:id",
  bookingController.EditBooking,
  bookingValidation.editBookingValidation
);

module.exports = router;
