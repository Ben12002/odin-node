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
  
  body("email").trim()
  .isEmail().withMessage(`Must be an email`),

  body("age").trim()
  .isInt({min: 18, max: 120}).withMessage(`Must be a number`),
  
  body("bio")
    .optional()
    .isLength({max: 200}).withMessage(`Maximum 200 characters`),
]

// Pass an array of middleware functions to controller
exports.usersCreatePost = [
  validateUser,
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("createUser", {
        title: "Create User",
        errors: errors.array(),
      });
    }
    const {firstName, lastName, email, age, bio} = req.body;
    usersStorage.addUser({firstName, lastName, email, age, bio});
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
    const { firstName, lastName, email, age, bio } = req.body;
    usersStorage.updateUser(id, {firstName, lastName, email, age, bio });
    res.redirect("/");
  }
]

exports.usersDeletePost = (req, res) => {
  usersStorage.deleteUser(req.params.id);
  res.redirect("/");
}

const validateSearch = [
  body("firstName").trim()
  .isAlpha().withMessage(`First name ${alphaErr}`)
  .isLength({min :1, max: 10}).withMessage(`First name ${lengthErr}`),
]

exports.usersSearchGet = [
  validateSearch, 
  (req, res) => {
  const { firstName } = req.query;
  const user = usersStorage.searchUser(firstName);

  if (!user) {
    res.status(404).render("index", {
      title: "User List",
      users: usersStorage.getUsers(),
    });
  }
  res.render('search', {user});
}]