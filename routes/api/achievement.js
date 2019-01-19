const router = require("express").Router();
const achievementController = require("../../controllers/achievementController");
const playerController = require("../../controllers/playerController");


router.route("/achievements")
  .get(achievementController.findAll);

router.route("/player")
  .post(playerController.findAll);

router.route("/achievements/:category")
  .get(achievementController.findByCategory);

router.route("/achievements/passed")
  .post(achievementController.findAllPassed);

router.route("/achievements/saved")
  .post(achievementController.findBySaved);

router.route("/achievements/save/:id")
  .put(achievementController.updateSaved);

router.route("/achievements/unsave/:id")
  .put(achievementController.updateUnsaved);

router.route("/achievements/pass/:id")
  .put(achievementController.complete);

router.route("/friends")
  .get(playerController.findAll);

module.exports = router;
