const express = require("express");
const router = express.Router();
const BookingController = require("../controllers/bookingController.js");
const bookingController = new BookingController();
// const BookingValidation = require("../validations/bookingValidation.js");
const { validate } = require("express-validation");

router.get("/", (req, res) => {
  // res.send(bookingController.GetAllBookings());
  res.send("Hello from the booking router");
});

// router.post(
//   "/",
//   validate(BookingValidation.createBookingValidation),
//   bookingController.CreateNewBooking
// );
router.post(
  "/",

  bookingController.CreateNewBooking
);

module.exports = router;
