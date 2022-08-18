const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api", (req, res) => {
  res.json({ bookings: ["testingBookings"] });
});

app.listen(4000, () => {
  console.log("Server started on 'http://localhost:5000'");
});
