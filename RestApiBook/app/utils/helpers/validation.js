const yup = require('yup')


const bookSchema = yup.object({
  id: yup.number().integer().positive().required(),
  authorId: yup.number().integer().positive().required(),
  publisherId: yup.number().integer().positive().required(),
  title: yup.string().required(),
  price: yup.number().positive().nullable(),
  year: yup.date().required(),
});


module.exports = { bookSchema }
