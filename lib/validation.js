const Joi = require("@hapi/joi");

function validateRegistration(data) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(20).required(),

    email: Joi.string()
      .email({ minDomainSegments: 2 })
      .lowercase()
      .required()
      .min(6),

    password: Joi.string().min(6).required(),
  });
  const validation = schema.validate(data);
  return validation;
}

function validateLogin(data) {
  const schema = Joi.object({
    email: Joi.string().email({ minDomainSegments: 2 }).lowercase().required(),

    password: Joi.string().required(),
  }).or("email");
  const validation = schema.validate(data);
  return validation;
}

module.exports = { validateRegistration, validateLogin };
