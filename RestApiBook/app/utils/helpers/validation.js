const yup = require('yup')


const bookSchema = yup.object({

  authorId: yup.number().integer().positive().required(),
  publisherId: yup.number().integer().positive().required(),
  title: yup.string().required(),
  price: yup.number().positive().nullable(),
  year: yup.date().required(),
});

let loginSchema = yup.object({
  email: yup.string().required(),
  password : yup.string().required()

})


module.exports = { bookSchema, loginSchema }
