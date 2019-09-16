server = require('server')
router = server.Router()
hamster = require('../models/Hamster')
module.exports = router

router.get('stuff')