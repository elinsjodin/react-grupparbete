const guestModel = require("../models/GuestsModel.js");
require("dotenv").config();

module.exports = class GuestService {
  async GetAllGuests() {
    const result = await guestModel.find({});

    if (!result) {
      throw new Error("Guests not found");
    } else {
      return result;
    }
  }

  async GetGuestById(id) {
    const guest = await guestModel.findById(id);

    if (!guest) {
      throw new Error("Guest not found");
    } else {
      return guest;
    }
  }

  async EditGuest(id, guest) {
    const result = await guestModel.findById(id).updateOne(guest);
    console.log(result);

    if (!result) {
      throw new Error("Failed to edit guest");
    } else {
      return result;
    }
  }

  async DeleteGuest(id) {
    const result = await guestModel.findById(id).deleteOne();

    if (!result) {
      throw new Error("Failed to delete guest");
    } else {
      return result;
    }
  }
};
