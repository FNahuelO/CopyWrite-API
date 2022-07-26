const { Router } = require('express')
const { textReverse } = require('../controllers/textReverse')

const router = Router()

router.get('/text', textReverse)

router.get('/', (req, res) => {
    return res.status(200).json('Server on')
})


module.exports = router;