const express = require("express");
const app = express();
const bookingsRouter = require("./routers/bookings-router.js");
const confirmationRouter = require("./routers/confirmation-router.js");
const adminRouter = require("./routers/admin-router.js");
const { default: mongoose } = require("mongoose");
const config = require("./configurations/config.js");
const errorHandler = require("./middlewares/errorHandler.js");
const cors = require("cors");
const path = require("path");

// const path = require("path");

// urlencoded is a middleware that allows us to use the req.body object
// app.use(express.urlencoded({ extended: true }));

// this allows for React static files to render on screen
// const dir = path.join(__dirname, "public");

// app.use(express.static(dir));

//app.use(express.static("public"));
//app.use("/images", express.static("images-11.jpeg"));
// app.use(
//   "/assets",
//   express.static(path.join(__dirname, "../client/src/assets"))
// );
// app.use(express.static(path.resolve(__dirname, "../client/src/assets")));

//express.json is a middleware that allows us to use the req.body object
app.use(
  cors({
    origin: ["*"],
    methods: ["*"],
  })
);

app.use(express.json());

//localhost:8000/
app.get("/", (req, res) => {
  res.send("Hello from main page");
});

//localhost:8000/bookings
app.use("/bookings", bookingsRouter);
//localhost:8000/confirmation/:id
app.use("/confirm", confirmationRouter);
//localhost:8000/admin
app.use("/admin", adminRouter);
// error hantering - måste ligga sist så att våra requests går igenom alla routes först
app.use(errorHandler);

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
