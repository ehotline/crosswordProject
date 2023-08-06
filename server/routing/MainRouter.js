const { Router } = require("express");
const crosswordsRouter = require("./CrosswordsRouter")
const wordsRouter = require("./WordsRouter")
const lettersRouter = require("./LettersRouter");
const userRouter = require("./UserRouter")
const ApiError = require("../middleware/errors/ApiError");
const router = Router()

router.get("", (req, res) => {
    res.send("MainRouter")
})
router.use("/crosswords", crosswordsRouter)
router.use("/words", wordsRouter)
router.use("/letters", lettersRouter)
router.use("/users", userRouter)

router.get("*", (req, res, next) => {
    return next(ApiError.NotFound("Unknown route!"))
})

module.exports = router