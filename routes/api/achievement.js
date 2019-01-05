const router = require("express").Router();
const achievementController = require("../../controllers/achievementController");
const playerController = require("../../controllers/playerController");

// Matches with "/api/achievement"
router.route("/achievements")
  .get(achievementController.findAll)
  .post(playerController.create);

  // Matches with "/api/player"
router.route("/player")
  .get(playerController.findAll)
  .post(playerController.create);

// Matches with "/api/achievement/:id"
router
  .route("/:id")
  .get(achievementController.findById)
  .put(achievementController.update)

module.exports = router;
