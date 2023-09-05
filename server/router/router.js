const Router = require("express");

const UserController = require("../controller/user-controller.js");

const router = new Router();

router.post("/registration", UserController.registration);
router.post("/login", UserController.login);
router.post("/logout", UserController.logout);
router.get("/activate/:link", UserController.activate);
router.get("/refresh", UserController.refresh);
router.get("/users", UserController.getUsers);
router.get("/tokens", UserController.getAllTokens);

module.exports = router;
