const db =require("./db");
const express = require('express')

db.connectToMongo()

const app = express()

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
