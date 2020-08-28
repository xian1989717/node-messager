const express = require('express')
const { getIndex } = require('./service')
const router = express.Router()

router.get('/', getIndex)

module.exports = router