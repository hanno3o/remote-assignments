const express = require('express')
const app = express()
const port = process.env.port || 3000;
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('<h1>Hello, My Server!<h1>')
})

app.use ((req, res, next) => {
  res.status(404)
  res.send('<h1>404 Page Not found... :(</h1>')
})

app.use ((err, req, res, next) => {
  res.status(500)
  res.send('<h1>Internal Server Error</h1>')
})

// port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})