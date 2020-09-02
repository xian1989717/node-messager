const express = require('express')
const {
  getIndex,
  getOne,
  getEditOne
} = require('./service')

const router = express.Router()

router
  .get('/', getIndex)
  .get('/getOne', getOne)
  .get('/editOne', getEditOne)

module.exports = router