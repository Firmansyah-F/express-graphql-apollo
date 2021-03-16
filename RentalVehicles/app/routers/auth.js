const express = require('express')
const { validateResource } = require('../utils/middleware/validator')
const router = express.Router();
const { loginSchema } = require("../utils/helpers/validation");
const AuthController = require('../controllers/authController');


router.route("/login")
      .post(validateResource(loginSchema) ,AuthController.login)

module.exports = { router };