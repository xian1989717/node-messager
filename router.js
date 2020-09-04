const express = require('express')
const {
  getIndex,
  getOne,
  getEditOne,
  editDetail,
  deleteOne
} = require('./service')

const router = express.Router()

router
  .get('/', getIndex)
  .get('/getOne', getOne)
  .get('/editOne', getEditOne)
  .post('/editDetail', editDetail)
  .get('/deleteOne', deleteOne)

module.exports = router