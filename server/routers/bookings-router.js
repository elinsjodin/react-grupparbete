const express = require("express");
const router = express.Router();

const BookingsModel = require("../models/BookingsModel.js");

router.get("/", (req, res) => {
  res.json({ bookings: ["testingBookings"] }).status(200);
  res.send("Hello from bookings").status(200);
});

router.post("/", async (req, res) => {
  const newBooking = new BookingsModel({
    date: req.body.date,
    time: req.body.time,
    numberOfGuests: req.body.numberOfGuests,
    bookedby: res.locals.id,
  });

  await newBooking.save();

  res.redirect("/confirm/" + res.locals.id);
});

module.exports = router;
