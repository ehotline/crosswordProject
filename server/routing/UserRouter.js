const { Router } = require("express");
const router = Router()
const controller = require("../controllers/UserController")
const authMiddleware = require("../middleware/AuthMiddleware")

router.post("/register", controller.register)
router.post("/login", controller.login)
router.get("/auth", authMiddleware, controller.check)

module.exports = router