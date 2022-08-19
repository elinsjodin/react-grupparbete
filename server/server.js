const express = require("express");
const app = express();
const bookingsRouter = require("./routers/bookings-router.js");
const confirmationRouter = require("./routers/confirmation-router.js");
const adminRouter = require("./routers/admin-router.js");
const secondAdminRouter = require("./routers/second-admin-router.js");

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
  console.log("Hello from main page");
});

app.use("/bookings", bookingsRouter);

app.use("/confirm/:id", confirmationRouter);

app.use("/admin", adminRouter);

app.use("/admin/:id", secondAdminRouter);

// Test, ska tas bort innan deployment
// app.get("/api", (req, res) => {
//   res.json({ bookings: ["testingBookings"] });
// });

app.listen(4000, () => {
  console.log("Server started on 'http://localhost:5000'");
});
