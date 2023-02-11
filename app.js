const express = require("express");
const cors = require("cors");
const bp = require("body-parser");

const controller = require("./controller");
const sequelize = require("./database");

const app = express();

app.use(cors());
app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());

app.get("/", controller.getUsers);
app.post("/", controller.postUser);
app.delete("/:id", controller.deleteUser);

sequelize
  .sync()
  .then((result) => {
    console.log("Database synced");
    app.listen(8080, controller.listen);
  })
  .catch((err) => console.log(err));
