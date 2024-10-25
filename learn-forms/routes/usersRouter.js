const { Router } = require("express");
const usersController = require("../controllers/usersController"); 
const usersRouter = Router();

usersRouter.get("/", usersController.usersListGet); // Home page, display all users

usersRouter.get("/create", usersController.usersCreateGet); // Render form page for creating user
usersRouter.post("/create", usersController.usersCreatePost); // Handle create user form submission

usersRouter.get("/:id/update", usersController.usersUpdateGet); // Render form page for updating user
usersRouter.post("/:id/update", usersController.usersUpdatePost); // Handle update user form submission


usersRouter.post("/:id/delete", usersController.usersDeletePost); // Delete User
// No need for GET route for delete, since we're redirecting to "/" in usersDeletePost anyway.

usersRouter.get("/search", usersController.usersSearchGet);

module.exports = usersRouter;