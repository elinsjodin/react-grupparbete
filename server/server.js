const express = require("express");
const app = express();
const bookingsRouter = require("./routers/bookings-router.js");
const confirmationRouter = require("./routers/confirmation-router.js");
const adminRouter = require("./routers/admin-router.js");
const { default: mongoose } = require("mongoose");
const config = require("./configurations/config.js");
const errorHandler = require("./middlewares/errorHandler.js");
const cors = require("cors");

// const path = require("path");

// urlencoded is a middleware that allows us to use the req.body object
// app.use(express.urlencoded({ extended: true }));

// this allows for React static files to render on screen
// app.use(express.static(path.resolve(__dirname, "../client/build")));

//express.json is a middleware that allows us to use the req.body object
app.use(
  cors({
    origin: ["*"],

    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT"],
  })
);

app.use(express.json());
//localhost:5000/bookings
app.use("/bookings", bookingsRouter);
//localhost:5000/confirmation/:id
app.use("/confirm", confirmationRouter);
//localhost:5000/admin
app.use("/admin", adminRouter);
// error hantering - måste ligga sist så att våra requests går igenom alla routes först
app.use(errorHandler);

//localhost:8000/
// Endast log?
app.get("/", (req, res) => {
  res.json();
  console.log("Hello from main page");
});

mongoose
  .connect(config.connectionString)
  .then(() => {
    console.log("Connected to database");
    app.listen(config.port, () => {
      console.log("App listening on port http://localhost:8000");
    });
  })
  .catch(() => {
    console.log("Error connecting to database");
  });
