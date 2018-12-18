const router = require("express").Router();
const achievementRoutes = require("./achievement");

// Book routes
router.use("/browse", achievementRoutes);

module.exports = router;
