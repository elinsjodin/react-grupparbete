const express = require("express");
const router = express.Router();

const BookingsModel = require("../models/BookingsModel.js");

router.get("/", async (req, res) => {
  res.send("Hello from admin");
  const bookings = await BookingsModel.find().lean();

  res.render({ bookings });
});

router.delete("/:id", async (req, res) => {
  await BookingsModel.findById(req.params.id).deleteOne();
});

module.exports = router;
