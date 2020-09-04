const express = require('express')
const bodyParser = require("body-parser")
const router = require('./router')

const app = express()

app.engine('html', require('express-art-template'))
app.set('views', './public/view')

app.use(express.static('public'))
// app.use(bodyParser.urlencoded({ extended: true }))
app.use(router)

app.listen('8080', () => {
  console.log('service is running!')
})