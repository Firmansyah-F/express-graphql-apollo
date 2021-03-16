const yup = require("yup");

const userSchema = yup.object({
  fullname: yup.string().required(),
  username: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required(),
  salt: yup.string().required(),
  role: yup.string().required(),
});

const typeSchema = yup.object({
  name: yup.string().required(),
});

const vehicleSchema = yup.object({
  name: yup.string().required(),
  typeId: yup.number().integer().positive().required(),
  hourlyPrice: yup
    .number()
    .test("is-decimal", "invalid decimal", (value) =>
      (value + "").match(/^\d*\.{1}\d*$/)
    )
    .required(),
  licensePlate: yup.string().required()
});

let loginSchema = yup.object({
  email: yup.string().required(),
  password: yup.string().required(),
});

module.exports = { userSchema, typeSchema, vehicleSchema, loginSchema };
