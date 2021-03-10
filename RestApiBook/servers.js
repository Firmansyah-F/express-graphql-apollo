const express = require("express");
const app = express();
const port = 4000;
const router = express.Router();
const {router : routerAuthor} = require ("./app/routers/author") 
const {router : routerBook} = require ("./app/routers/book") 
const {router : routerPublisher} = require ("./app/routers/publisher")
// CRUD
// routing nya mengarah ke root "/"
app.use(express.json())


router.use("/api/v2", [routerAuthor,routerBook,routerPublisher])
app.use(router)


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
