const express = require("express");
const app = express();
const bookingsRouter = require("./routers/bookings-router.js");
const confirmationRouter = require("./routers/confirmation-router.js");
const adminRouter = require("./routers/admin-router.js");
const secondAdminRouter = require("./routers/second-admin-router.js");

// urlencoded is a middleware that allows us to use the req.body object
app.use(express.urlencoded({ extended: true }));

//express.static is a middleware that allows us to serve static files
app.use(express.static("public"));

//express.json is a middleware that allows us to use the req.body object
app.use(express.json());

//localhost:3000/
app.get("/", (req, res) => {
  res.send("Hello World");
  console.log("Hello from main page");
});

//localhost:3000/bookings
app.use("/bookings", bookingsRouter);

//localhost:3000/confirmation/:id
app.use("/confirm/:id", confirmationRouter);

//localhost:3000/admin
app.use("/admin", adminRouter);

//localhost:3000/admin/:id
app.use("/admin/:id", secondAdminRouter);

//localhost:3000/anything else
app.use("/", (req, res) => {
  res.status(404).redirect("*");
});

// Test, ska tas bort innan deployment
// app.get("/api", (req, res) => {
//   res.json({ bookings: ["testingBookings"] });
// });

app.listen(4000, () => {
  console.log("Server started on 'http://localhost:5000'");
});
