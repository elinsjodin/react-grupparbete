require("dotenv").config();
const bookingModel = require("../models/BookingsModel.js");
const guestModel = require("../models/GuestsModel.js");

module.exports = class TestingService {
  async DeleteDataFromDatabase() {
    await bookingModel.deleteMany({});
    await guestModel.deleteMany({});
  }
};
