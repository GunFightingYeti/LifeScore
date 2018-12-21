const router = require("express").Router();
const achievementRoutes = require("./achievement");

router.use("/browse", achievementRoutes);

module.exports = router;
