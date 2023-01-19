const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('<h1>Hello, My Server!<h1>')
})

app.get("/getData", (req, res) => {
  if (!req.query) {
    res.send('Lack of Parameter')
  } else {
    let num = Number(req.query.number)
    res.send(`${(1+num)*num/2}`)
  }
}) 
// It doesn't work...:(

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})