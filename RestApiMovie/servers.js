const express = require("express");
const app = express();
const port = 3000;
const router = express.Router();
const {router : routerGenre} = require ("./appv1/routers/genre") 
const {router : routerMovie} = require ("./appv1/routers/movie") 
const {router : routerLanguage} = require ("./appv1/routers/language")
// CRUD
// routing nya mengarah ke root "/"
app.use(express.json())


router.use("/api/v2", [routerGenre,routerMovie,routerLanguage])
app.use(router)


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
