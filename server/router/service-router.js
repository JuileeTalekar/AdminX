const express = require("express");
const router = express.Router();
const Service = require("../models/service-model");
const services = require("../controllers/service-controller");      


router.route("/service").get(services);

module.exports = router;