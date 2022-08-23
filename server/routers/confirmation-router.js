const express = require("express");
const router = express.Router();
const BookingController = require("../controllers/bookingController.js");
const bookingController = new BookingController();

// Hämta specifik bokning
router.get("/", bookingController.GetBookingById);

module.exports = router;
