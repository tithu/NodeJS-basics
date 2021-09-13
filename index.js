const express = require('express')
const app = express()
const port = 3000
const indexRouter= require('./src/Router/indexRouter')
require("dotenv").config();

app.use(express.json())
app.use('/', indexRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})