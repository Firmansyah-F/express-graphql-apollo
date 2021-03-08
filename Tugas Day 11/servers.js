const express = require("express");
const app = express();
const port = 3000;
const router = express.Router();
const {router : routerTodo} = require ("./app/routers/todo") 
const {router : routerUser} = require ("./app/routers/user") 
const {router : routerComment} = require ("./app/routers/comment")
// CRUD
// routing nya mengarah ke root "/"
app.use(express.json())


router.use("/api/v1", [routerTodo,routerUser,routerComment])
app.use(router)



// app.delete("/todos/:id", (req, res) => {
//   console.log(req.params)

//   res.json({
//     "message": `success delete ${req.params} !`
//   })
// })

// app.post("/todos", (req, res) => {
//   console.log(req.body)

//   res.json({
//     "message": `succes menambahkan ${res.body}`
//   });
// })

// // app.patch("/todos/:id", (req, res) => {
// //   console.log(req.body)

// //   res.json({
// //     "message": `succes update data ${res.body}`
// //   })
// // });


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
