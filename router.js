const express = require('express')
const {
  getIndex,
  getOne
} = require('./service')
const router = express.Router()

router
  .get('/', getIndex)
  .get('/getOne', getOne)

module.exports = router