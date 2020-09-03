const express = require('express')
const {
  getIndex,
  getOne,
  getEditOne,
  editDetail
} = require('./service')

const router = express.Router()

router
  .get('/', getIndex)
  .get('/getOne', getOne)
  .get('/editOne', getEditOne)
  .post('/editDetail', editDetail)

module.exports = router