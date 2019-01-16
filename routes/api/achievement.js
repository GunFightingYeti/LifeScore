const router = require("express").Router();
const achievementController = require("../../controllers/achievementController");
const playerController = require("../../controllers/playerController");

// "/api/achievement"
router.route("/achievements")
  .get(achievementController.findAll)
  .post(achievementController.findAll);

// "/api/player"
router.route("/player")
  .post(playerController.findAll);

// "/api/achievements/:id"
router
  .route("/:id")
  .get(achievementController.findById)
  .put(achievementController.update);

// "/api/achievements/:category"
router
  .route("/achievements/:category")
  .get(achievementController.findByCategory)
  .put(achievementController.update);

// "/api/achievements/saved"
router
  .route("/achievements/saved")
  .post(achievementController.findBySaved)
  .put(achievementController.update);

// "/api/friends
router.route("/friends")
  .get(playerController.findAll);

module.exports = router;
