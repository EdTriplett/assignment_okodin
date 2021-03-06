const express = require("express");
const router = express.Router();
const { userController, profileController } = require("../controllers");

// router.get("/", userController.showUsers);

router.get("/", (req, res) => {
	res.render("login");
});

router.post("/", userController.login);

module.exports = router;
