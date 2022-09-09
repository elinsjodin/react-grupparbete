const express = require("express");
const router = express.Router();
const bookingValidation = require("../validations/bookingValidation.js");
const BookingController = require("../controllers/bookingController.js");

const bookingController = new BookingController();

router.get("/", bookingController.GetAllBookings);

// router.get("/:id", bookingController.GetBookingById);

router.get("/date", bookingController.GetBookingByDate);

// router.get("/:date", async (req, res) => {
//   try {
//     // get the date from the request
//     const GetDateBooking = async (date) => {
//       const bookings = await bookingService.GetAllBookings();
//       // await BookingService.GetAllBookings(date);
//       //get date from booking
//       const bookingbyDate = await BookingModel.find({ date: date.date });
//       console.log("date", date);
//       //filter out bookings with the matching date
//       console.log("Bookingbydate", bookingbyDate);
//       bookings.filter((date) => req.params.date === date);
//       //loop through the bookings and return the ones with the matching date
//       for (let i = 0; i < bookings.length; i++) {
//         if (bookings[i].date === date) {
//           console.log(bookings[i]);
//           return bookings[i];
//         }
//       }
//     };

//     GetDateBooking(req.params.date);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//     console.log(error);
//   }
// });

router.post(
  "/",
  bookingController.CreateNewBooking,
  bookingValidation.validateBooking
);

router.delete("/cancel/:id", bookingController.CancelBooking);

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

// Router för testning i Cypress
router.get("/cancel/test", bookingController.FindBookingByIdForTesting);

module.exports = router;
