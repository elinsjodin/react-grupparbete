const express = require("express");
const router = express.Router();

const BookingsModel = require("../models/BookingsModel.js");

router.get("/", async (req, res) => {
  // bookings will be an array of objects with the properties defined in the BookingsModel.js file
  const booking = await BookingsModel.findOne();

  const bookingsArray = [];

  //loop through the bookings and push them to the bookingsArray
  for (const item of booking) {
    if (item.bookedBy == res.locals.id) {
      bookingsArray.push(item);
    }
  }

  res.render({ booking });
});

module.exports = router;
