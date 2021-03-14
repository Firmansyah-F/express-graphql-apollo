// const { hash } = require("bcrypt");
const {user} = require("../db/models");
const { baseResponse } = require("../utils/helpers/baseResponse");
const { hashing } = require("../utils/helpers/hashPassword")


class UserController {
    static async create (req, res, next) {
        try {
            const { salt , hash } = hashing(req.body.password)
            
            const createUser = await user.create({
                userName : req.body.userName,
                fullName : req.body.fullName,
                email : req.body.email,
                password : hash,
                salt : salt,
                role : req.body.role
            });
            return baseResponse({
                success: true,
                message: "create new user",
                data: createUser,
              })(res);
            
        } catch (error) {
            next(error)
        }
    }
    static async getAll (req, res, next) {
        try {
            const getUsers = await user.findAll();
            return baseResponse({
                success: true,
                message: "get all user",
                data: getUsers,
              })(res);
        } catch (error) {
            next(error)
        }

    }
    static async uploadUser(req, res, next) {
        try {
          const file = req.file.path;
          const id = req.params.id;
    
          const dataUser = await user.findByPk(id);
    
          const dataUrl = {
            userName: dataUser.dataValues.userName,
            fullName: dataUser.dataValues.fullName,
            email: dataUser.dataValues.email,
            password : dataUser.dataValues.password,
            salt : dataUser.dataValues.salt,
            role : dataUser.dataValues.role,
            photo: file,
          };
          if (dataUser) {
            const dataUpdate = await user.update(dataUrl, {
              where: {
                id: id,
              },
            });
            const dataUser = await user.findByPk(id);
            return baseResponse({
              success: true,
              message: "success",
              data: dataUser,
            })(res, 201);
          }
          return (
            baseResponse({ success: false, message: "data tidak ada", data: [] }),
            (res, 200)
          );
        } catch (error) {
          next(error);
        }
      }
    
      static async getById(req, res, next) {
        try {
          const userById = await user.findByPk(req.params.id);
          console.log(userById);
    
          return baseResponse({
            success: true,
            message: "get user by Id",
            data: userById,
          })(res);
        } catch (error) {
          next(error);
        }
      }
    
      static async delete(req, res, next) {
        try {
          const deleteUser = await user.destroy({
            where: {
              id: req.params.id,
            },
          });
          if (deleteUser) {
            return res.status(204).json();
          }
          return res.status(404).json({
            succes: false,
            message: "user tidak ditemukan",
            data: [],
          });
        } catch (error) {
          next(error);
        }
      }
    
      static async update(req, res, next) {
        try {
          const { salt , hash } = hashing(req.body.password)
          const newUser = {
            userName : req.body.userName,
            fullName : req.body.fullName,
            email : req.body.email,
            password : hash,
            salt : salt,
            role : req.body.role,

          };
          const userUpdate = await user.update(newUser, {
            where: {
              id: req.params.id,
            },
          });
          if (userUpdate[0]) {
            const getUser = await user.findByPk(req.params.id);
            return baseResponse({
              success: true,
              message: "success update user",
              data: getUser,
            })(res);
          }
          return res.status(404).json({
            succes: false,
            message: "data user tidak ditemukan",
            data: [],
          });
        } catch (error) {
          next(error);
        }
      }
    
}
module.exports = UserController