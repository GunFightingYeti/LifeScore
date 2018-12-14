const router = require("express").Router();
const achievementRoutes = require("./achievement");

// Book routes
router.use("/books", achievementRoutes);

module.exports = router;
