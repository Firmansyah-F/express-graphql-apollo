const express = require("express");
const app = express();
const port = 4000;
const router = express.Router();
const { router: routerAuthor } = require("./app/routers/author");
const { router: routerBook } = require("./app/routers/book");
const { router: routerUser } = require("./app/routers/user")
const { router: routerAuth } = require("./app/routers/auth")
const { router: routerPublisher } = require("./app/routers/publisher");
const { errorHandler } = require("./app/utils/middleware/errorHandling");
const { logger } = require("./app/utils/middleware/morgan");
const morgan = require('morgan');

// CRUD
// routing nya mengarah ke root "/"
app.use(express.json());

app.use(logger);

app.use(morgan(`dev`))

router.use("/api/v2", [routerAuthor, routerBook, routerPublisher, routerUser, routerAuth]);
app.use(router);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
