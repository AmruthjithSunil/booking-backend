const User = require("./userModel");

exports.getUsers = (req, res, next) => {
  User.findAll()
    .then((users) => {
      console.log("Received Users");
      res.json(users);
    })
    .catch((err) => console.log(err));
};

exports.postUser = (req, res, next) => {
  const name = req.body.name;
  const phone = req.body.phone;
  const email = req.body.email;
  User.create({
    name: name,
    phone: phone,
    email: email,
  })
    .then((result) => {
      console.log("Created User");
    })
    .catch((err) => console.log(err));
};

exports.deleteUser = (req, res, next) => {
  const userId = req.params.id;
  User.findByPk(userId)
    .then((user) => {
      return user.destroy();
    })
    .then((result) => {
      console.log("User Deleted");
    })
    .catch((err) => console.log(err));
};

exports.listen = () => {
  console.log("Server listening at port 8080");
};
