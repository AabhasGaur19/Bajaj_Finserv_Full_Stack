const express = require("express");
const router = express.Router();

const { healthCheck } = require("../controllers/healthController");
const bfhlRoutes = require("./bfhlRoutes");

router.get("/", healthCheck);

router.use("/", bfhlRoutes);

module.exports = router;
