const router = require("express").Router();
const achievementController = require("../../controllers/achievementController");
const playerController = require("../../controllers/playerController");


router.route("/achievements")
  .get(achievementController.findAll);

router.route("/player")
  .post(playerController.findAll);

router.route("/achievements/passed")
  .get(achievementController.findAllPassed);

router
  .route("/achievements/:category")
  .get(achievementController.findByCategory);

router
  .route("/achievements/saved")
  .post(achievementController.findBySaved);

router
  .route("/achievements/save/:id")
  .put(achievementController.updateSaved);

router.route("/friends")
  .get(playerController.findAll);

module.exports = router;
