const express = require("express");
const router = express.Router();
const bookingValidation = require("../validations/bookingValidation.js");
const BookingController = require("../controllers/bookingController.js");
const bookingController = new BookingController();

// bookings will be an array of objects with the properties defined in the BookingsModel.js file
router.get("/", bookingController.GetAllBookings);
// Hämta specifik bokning
router.get("/:id", bookingController.GetBookingById);
// Redigera bokning
router.put(
  "/booking/edit/:id",
  bookingController.EditBooking,
  bookingValidation.editBookingValidation
);
router.put(
  "/guest/edit/:id",
  bookingController.EditGuest,
  bookingValidation.editBookingValidation
);
// route to get id and to then delete it
router.delete("/delete/:id", bookingController.DeleteBooking);

module.exports = router;
