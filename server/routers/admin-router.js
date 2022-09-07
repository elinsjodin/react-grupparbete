const express = require("express");
const router = express.Router();
const bookingValidation = require("../validations/bookingValidation.js");
const BookingController = require("../controllers/bookingController.js");
const GuestController = require("../controllers/guestController.js");
const bookingController = new BookingController();
const guestController = new GuestController();

// Hämta alla bokningar och kunna skapa ny bokning
router.get(
  "/",
  bookingController.GetAllBookings,
  bookingController.CreateNewBooking
);
// Hämta specifik bokning
router.get(
  "/:id",
  bookingController.GetBookingById,
  guestController.GetGuestById
);
// Redigera bokning och gästinfo
router.put(
  "/:id",
  bookingController.EditBooking,
  guestController.EditGuest,
  bookingValidation.editBookingValidation
);
// Ta bort bokning
router.delete("/booking/delete/:id", bookingController.DeleteBooking);
// Ta bort gästinfo
router.delete("/guest/delete/:id", guestController.DeleteGuest);

module.exports = router;
