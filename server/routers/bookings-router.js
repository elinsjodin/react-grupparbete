const express = require("express");
const router = express.Router();
const bookingValidation = require("../validations/bookingValidation.js");
const BookingController = require("../controllers/bookingController.js");
const BookingModel = require("../models/BookingsModel");
const BookingService = require("../services/bookingService.js");

const bookingService = new BookingService();

const bookingController = new BookingController();

router.get("/", bookingController.GetAllBookings);

router.get("/:date", async (req, res) => {
  try {
    // get the date from the request
    const GetDateBooking = async (date) => {
      const bookings = await bookingService.GetAllBookings();
      // await BookingService.GetAllBookings(date);
      //get date from booking
      const bookingbyDate = await BookingModel.find({ date: date.date });
      console.log("date", date);
      //filter out bookings with the matching date
      console.log("Bookingbydate", bookingbyDate);
      bookings.filter((date) => req.params.date === date);
      //loop through the bookings and return the ones with the matching date
      for (let i = 0; i < bookings.length; i++) {
        if (bookings[i].date === date) {
          console.log(bookings[i]);
          return bookings[i];
        }
      }
    };

    GetDateBooking(req.params.date);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
});

router.post(
  "/",
  bookingController.CreateNewBooking,
  bookingValidation.validateBooking
);

module.exports = router;
