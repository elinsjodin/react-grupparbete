const express = require("express");
const router = express.Router();

const BookingsModel = require("../models/BookingsModel.js");

router.get("/", async (req, res) => {
  res.send("Hello from admin");
  // bookings will be an array of objects with the properties defined in the BookingsModel.js file
  const bookings = await BookingsModel.find().lean();

  res.render({ bookings });
});

//route to get id and to then delete it
router.get("/:id/delete", async (req, res) => {
  //find the id and delete it from the database
  await BookingsModel.findById(req.params.id).deleteOne();
});

module.exports = router;
