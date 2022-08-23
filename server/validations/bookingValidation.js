const Joi = require("joi");

const BookingValidation = {
  createBookingValidation: {
    body: Joi.object({
      date: Joi.date().required(),
      time: Joi.string().required(),
      numberOfGuests: Joi.number().min(1).max(6).required(),
      name: Joi.string().required(),
      email: Joi.string().required(),
      phone: Joi.number().required(),
      bookingMessage: Joi.string(),
    }),
  },
  editBookingValidation: {
    body: Joi.object({
      date: Joi.date(),
      time: Joi.string(),
      numberOfGuests: Joi.number(),
      name: Joi.string(),
      email: Joi.string(),
      phone: Joi.number(),
      bookingMessage: Joi.string(),
    }),
  },
};

module.exports = BookingValidation;
