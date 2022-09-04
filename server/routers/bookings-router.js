const express = require("express");
const router = express.Router();
const bookingValidation = require("../validations/bookingValidation.js");
const BookingController = require("../controllers/bookingController.js");
const BookingModel = require("../models/BookingsModel");
const BookingService = require("../services/bookingService.js");

const bookingService = new BookingService();

const bookingController = new BookingController();

router.get("/", bookingController.GetAllBookings);

router.post(
  "/",
  bookingController.CreateNewBooking,
  bookingValidation.validateBooking
);

// router.get("/:date", async (req, res) => {
//   const date = req.params.date;

//   const bookings = await bookingService.GetBookingsByDate(date);

//   //if booking matches date then return booking is found
//   if (bookings) {
//     res.status(200).json(bookings);
//   } else {
//     res.status(404).json({ message: "No bookings found" });
//   }
// });

// router.post("/:date", async (req, res) => {
//   const date = req.params.date;

//   const bookings = await bookingService.GetBookingsByDate(date);

//   //if booking matches date then return booking is found
//   if (bookings) {
//     res.status(200).json(bookings);
//   } else {
//     res.status(404).json({ message: "No bookings found" });
//   }
// });

module.exports = router;
