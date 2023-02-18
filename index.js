require('dotenv').config();
const express = require('express')
const app = express()


app.get('/', (req, res) => {
  res.send('<h1>Hello World 2023!</h1>');
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening in ${process.env.PORT}`)
})