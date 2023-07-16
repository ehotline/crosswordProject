const { Router } = require("express");
const router = Router()
const controller = require('../controllers/CrosswordsController')

router.get('', controller.getAll)

module.exports = router