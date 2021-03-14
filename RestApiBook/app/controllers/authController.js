const { user } = require("../db/models");
const { baseResponse } = require("../utils/helpers/baseResponse");
const bcrypt = require("bcrypt");
const { generateJwt } = require("../utils/middleware/authjwt")

class AuthController {
  static async login(req, res, next) {
    try {
      const getUser = await user.findOne({
        where: {
          email: req.body.email,
        },
      });
      if (getUser) {
        const check = bcrypt.compareSync(req.body.password, getUser.password);
        console.log(check);
        if (check) {
          const payload = {
            id: getUser.id,
            email: getUser.email,
            userName: getUser.userName,
            fullName: getUser.fullName,
            role: getUser.role,
          };
          payload.token = generateJwt(payload)
          return baseResponse({
            success: true,
            message: "login berhasil",
            data: payload,
          })(res);
        } else {
          return baseResponse({
            success: false,
            message: "login gagal",
            data: [],
          })(res.status(404));
        }
      }
    } catch (error) {
      next(error);
    }
  }
}
module.exports = AuthController;
