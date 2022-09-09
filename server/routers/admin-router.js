const express = require("express");
const router = express.Router();
const bookingValidation = require("../validations/bookingValidation.js");
const BookingController = require("../controllers/bookingController.js");
const GuestController = require("../controllers/guestController.js");
const bookingController = new BookingController();
const guestController = new GuestController();

// Hämta alla bokningar
router.get("/", bookingController.GetAllBookings);

// Skapa ny bokning
router.post("/", bookingController.CreateNewBooking);

// Hämta specifik bokning
router.get("/edit/:id", bookingController.GetBookingById);

// Redigera bokning
router.put(
  "/edit/:id",
  bookingController.EditBooking,
  bookingValidation.editBookingValidation
);

// Ta bort bokning
router.delete("/booking/delete/:id", bookingController.DeleteBooking);

// Hämta alla gäster
router.get("/guests", guestController.GetAllGuests);

// Hämta specifik gäst
router.get("/edit/guest/:id", guestController.GetGuestById);

// Redigera gäst
router.put(
  "/edit/guest/:id",
  guestController.EditGuest,
  bookingValidation.editGuestValidation
);

// Ta bort gäst
router.delete("/guest/delete/:id", guestController.DeleteGuest);

module.exports = router;
