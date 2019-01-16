const router = require("express").Router();
const achievementController = require("../../controllers/achievementController");
const playerController = require("../../controllers/playerController");


router.route("/achievements")
  .get(achievementController.findAll)
  .post(achievementController.findAll);

router.route("/player")
  .post(playerController.findAll);

router.route("/api/achievements/passed")
  .get(achievementController.findAllPassed);

router
  .route("/:id")
  .get(achievementController.findById)
  .put(achievementController.update);

router
  .route("/achievements/:category")
  .get(achievementController.findByCategory)
  .put(achievementController.update);

router
  .route("/achievements/saved")
  .post(achievementController.findBySaved)
  .put(achievementController.update);

router
  .route("/achievements/save/:id")
  .put(achievementController.updateSaved);

router.route("/friends")
  .get(playerController.findAll);

module.exports = router;
