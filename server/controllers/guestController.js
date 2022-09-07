const bookingValidation = require("../validations/bookingValidation.js");
const GuestService = require("../services/guestService.js");
const guestService = new GuestService();

module.exports = class GuestController {
  // async GetAllGuests(req, res, next) {
  //   try {
  //     const results = await guestService.GetAllGuests();

  //     res.send(results);
  //   } catch (error) {
  //     next({ status: error.status, message: error.message });
  //     console.log(error);
  //   }
  // }

  async GetGuestById(req, res, next) {
    try {
      const id = req.params.id;

      const result = await emailService.GetGuestById(id);

      res.send(result);
    } catch (error) {
      next({ status: error.status, message: error.message });
    }
  }

  async EditGuest(req, res, next) {
    try {
      const id = req.params.id;
      const guest = req.body;

      bookingValidation.editGuestValidation(guest);

      guestService.EditGuest(id, guest).then((guestDataInBooking) => {
        if (!guestDataInBooking) {
          res
            .status(400)
            .send({ message: `Unable to update guest with id: ${id}` });
        } else {
          res.send(guestDataInBooking);
        }
      });
    } catch (error) {
      next({ status: error.status, message: error.message });
    }
  }

  async DeleteGuest(req, res, next) {
    try {
      console.log("Deleting guest");
      const id = req.params.id;

      const result = await guestService.DeleteGuest(id);
      res.send(result);
    } catch (error) {
      next({ status: error.status, message: error.message });
    }
  }
};
