const Joi = require("joi");

userInfoConfiger = (userInfo) => {
  const schema = Joi.object({
    email: Joi.string().min(3).max(50).required().email(),
    password: Joi.string().min(3).max(20).required(),
    firstName: Joi.string().min(3).max(20),
    lastName: Joi.string().min(3).max(20),
    imageDir: Joi.string().min(3).max(20),
  });

  return schema.validate(userInfo);
};

module.exports = { userInfoConfiger };
