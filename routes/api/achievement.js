const router = require("express").Router();
const achievementController = require("../../controllers/achievementController");

// Matches with "/api/achievement"
router.route("/achievements")
.get(achievementController.findAll)
.post(achievementController.create);

// Matches with "/api/achievement/:id"
router
  .route("/:id")
  .get(achievementController.findById)
  .put(achievementController.update)

module.exports = router;
