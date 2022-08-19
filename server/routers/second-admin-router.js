const express = require("express");
const router = express.Router();

const BookingsModel = require("../models/BookingsModel.js");

// Kommer ev behöva ändra för att hämta in specifik bokning
router.get("/", async (req, res) => {
  const booking = await BookingsModel.findById(req.params.id).lean();

  // const bookingsArray = [];

  // for (const item of booking) {
  //   if (item.bookedBy == res.locals.id) {
  //     bookingsArray.push(item);
  //   }
  // }

  res.render({ booking });
});

router.put("/", async (req, res) => {
  const id = ObjectId(req.params.id);

  const updatedBooking = {
    date: req.body.date,
    time: req.body.time,
    numberOfGuests: req.body.numberOfGuests,
    bookedBy: {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      bookingMessage: req.body.bookingMessage,
    },
  };
  await updatedBooking.updateOne({ _id: id }, { $set: updatedBooking });
});

module.exports = router;
