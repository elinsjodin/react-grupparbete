const express = require("express");
const router = express.Router();

const BookingsModel = require("../models/BookingsModel.js");

router.get("/admin", async (req, res) => {
  const bookings = await BookingsModel.find().lean();

  res.render({ bookings });
});

router.get("/:id/delete", async (req, res) => {
  await BookingsModel.findById(req.params.id).deleteOne();
});

module.exports = router;
