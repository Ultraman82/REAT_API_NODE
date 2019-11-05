const express = require("express");
const router = express.Router();

const WaterWalkController = require("../controllers/waterwalk");
const checkAuth = require("../middleware/check-auth");

router.post("/", checkAuth, WaterWalkController.verifyData);

module.exports = router;
