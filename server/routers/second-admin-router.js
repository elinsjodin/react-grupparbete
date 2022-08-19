const express = require("express");
const router = express.Router();

const BookingsModel = require("../models/BookingsModel.js");

// Kommer ev behöva ändra för att hämta in specifik bokning
router.get("/", async (req, res) => {
  const booking = await BookingsModel.findOne();

  const bookingsArray = [];

  for (const item of booking) {
    if (item.bookedBy == res.locals.id) {
      bookingsArray.push(item);
    }
  }

  res.render({ booking });
});

module.exports = router;
