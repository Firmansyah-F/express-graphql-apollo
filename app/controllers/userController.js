const { user } = require('./../db/models')

class userController {

  static async create(req, res) {
    try {
      const objUser = req.body
      console.log(objUser)
      const createUser = await user.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });
      console.log(createUser)
      
      const payload = {
        success: true,
        message: "berhasil",
        data: createUser
      }
      return res.status(201).json(payload)
      
    } catch (error) {
      
    }

  }

  static async getUser(req, res) {
    const users = await user.findAll()
    console.log(users)
    const payload = {
      success: true,
      message: "success create user",
      data: users,
    }
    return res.json(payload)
  }

  // static getUser(req,res) {
  //     const users = {
  //         success : true,
  //         message : "data berhasil didapatkan",
  //         data    : [

  //               {
  //                 id: 1,
  //                 name: "di",
  //                 description: "contoh"

  //               },
  //               {
  //                 id: 2,
  //                 name: "ff",
  //                 description: "testing"
  //               }

  //               ] 

  //     }

  //     res.json(users)
  // }

  
  static async delete(req, res) {
    const deleteUser = await user.distroy({
      where: {
        id: req.params.id,
      },
    });
    if (deleteUser) {
      return res.status(204).json();
    }
    return res.status(404).json({
      success: false,
      message: "data user tidak ada",
      data: []
    });

  }

  static async update (req,res) {
    const newUser = {
      username : req.body.username,
      email : req.body.email,
    };
    const userUpdate = await user.update(newUser, {
      where :{
        id: req.params.id
      }
    });
    console.log(userUpdate);

    if (userUpdate[0]){
      const getUser = await user.findByPk(req.params.id)
      const payload = {
        success: true,
        message: "success update user",
        data: getUser,
      }
      return res.json(payload);
    }
    return res.status(404).json({
        success : false,
        message : "data tidak ditemukan",
        data : [],
    }) ;
  }

  // static deleteUser(req,res) {
  //     const id = req.param.id
  //     console.log (id)

  //     res.json()

  // }




}
module.exports = userController

