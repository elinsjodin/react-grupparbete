const Joi = require("joi");

const validateBooking = (bookingToValidate) => {
  const booking = Joi.object({
    date: Joi.string().required(),
    time: Joi.string().required(),
    numberOfGuests: Joi.number().min(1).max(6).required(),
    bookedBy: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required(),
      phone: Joi.string().required(),
      bookingMessage: Joi.string(),
    }),
  });
  return booking.validate(bookingToValidate);
};

const editBookingValidation = (updatedBookingToValidate) => {
  const updatedBooking = Joi.object({
    date: Joi.string(),
    time: Joi.string(),
    numberOfGuests: Joi.number(),
  });
  return updatedBooking.validate(updatedBookingToValidate);
};

const editGuestValidation = (updatedGuestToValidate) => {
  const updatedGuest = Joi.object({
    name: Joi.string(),
    email: Joi.string(),
    phone: Joi.string(),
    bookingMessage: Joi.string(),
  });
  return updatedGuest.validate(updatedGuestToValidate);
};

exports.validateBooking = validateBooking;
exports.editBookingValidation = editBookingValidation;
exports.editGuestValidation = editGuestValidation;
