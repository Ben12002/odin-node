const usersStorage = require("../storages/usersStorage");
const { body, validationResult } = require("express-validator");

exports.usersListGet = (req, res) => {
  res.render("index", {
    title: "User List",
    users: usersStorage.getUsers(),
  });
};

exports.usersCreateGet = (req, res) => {
  res.render("createUser", {
    title: "Create User",
  });
};


// Our post endpoint before adding validation

// exports.usersCreatePost = (req, res) => {
//   const { firstName, lastName} = req.body;
//   usersStorage.addUser({firstName, lastName});
//   res.redirect("/");
// }


//  Our post endpoint After adding validation

const alphaErr = "must only contain letters.";
const lengthErr = "must be between 1 and 10 characters."

const validateUser = [
  body("firstName").trim()
    .isAlpha().withMessage(`First name ${alphaErr}`)
    .isLength({min :1, max: 10}).withMessage(`First name ${lengthErr}`),

  body("lastName").trim()
    .isAlpha().withMessage(`Last name ${alphaErr}`)
    .isLength({min :1, max: 10}).withMessage(`Last name ${lengthErr}`),
]

// Pass an array of middleware functions to controller
exports.usersCreatePost = [
  validateUser,
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty) {
      return res.status(400).render("createUser", {
        title: "Create User",
        errors: errors.array(),
      });
    }
    const {firstName, lastName} = req.body;
    usersStorage.addUser({firstName, lastName});
    res.redirect("/");
  }
]

exports.usersUpdateGet = (req, res) => {
  const { id } = req.params;
  res.render("updateUser", {
    title: "Update User",
    user: usersStorage.getUser(id),
  });
};


exports.usersUpdatePost = [
  validateUser,
  (req, res) => {
    const { id } = req.params;
    const user = usersStorage.getUser(id);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("updateUser", {
        user,
        title: 'Update User',
        errors: errors.array(),
      });
    }
    const { firstName, lastName } = req.body;
    usersStorage.updateUser(id, {firstName, lastName });
    res.redirect("/");
  }
]