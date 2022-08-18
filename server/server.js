const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.json({ bookings: ["testingBookings"] });
});

app.listen(5000, () => {
  console.log("Server started on 'http://localhost:5000'");
});
