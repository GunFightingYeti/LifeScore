const router = require("express").Router();
const achievementRoutes = require("./achievement");

router.use("/", achievementRoutes);

module.exports = router;
