const { Router } = require("express");
const router = Router()
const controller = require("../controllers/CrosswordsController")

router.get("", controller.getAll)
router.post("", controller.add)
router.delete("", controller.remove)

module.exports = router