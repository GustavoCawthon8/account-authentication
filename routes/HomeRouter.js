const express = require("express");
const router = express.Router();
const HomeRouter = require("../controllers/HomeController");
const CheckAuth = require("../middlewares/CheckAuth");

router.get("/", CheckAuth ,HomeRouter.home);

module.exports = router;