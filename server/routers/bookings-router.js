const express = require("express");
const router = express.Router();

const BookingsModel = require("../models/BookingsModel.js");

router.get("/bookings", (req, res) => {
  res.send("Hello from bookings");
});

router.post("/bookings", async (req, res) => {
  const newBooking = new BookingsModel({
    date: req.body.date,
    time: req.body.time,
    bookedby: res.locals.id,
  });

  await newBooking.save();

  res.redirect("/confirm/" + res.locals.id);
});

module.exports = router;
