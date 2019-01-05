const router = require("express").Router();
const achievementController = require("../../controllers/achievementController");
const playerController = require("../../controllers/playerController");

// Matches with "/api/achievement"
router.route("/achievements")
  .post(achievementController.findAll);

  // Matches with "/api/player"
router.route("/player")
  .post(playerController.findAll);

// Matches with "/api/achievement/:id"
router
  .route("/:id")
  .get(achievementController.findById)
  .put(achievementController.update)

module.exports = router;
