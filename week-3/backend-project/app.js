const express = require('express')
const app = express()
const port = process.env.port || 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello, My Server!<h1>')
})

app.get('/getData', (req, res) => { 
  let num = req.query.number
  if (!num) {
      res.send('Lack of Parameter')
  } else if(!Number(num)) {
      res.send('Wrong Parameter')
  } else {
      num = Number(num)
      res.send(`${(1+num)*num/2}`)
  }
})

app.use(express.static('public'))

app.use ((req, res, next) => {
  res.status(404)
  res.send('<h1>404 Page Not found... :(</h1>')
})

app.use ((err, req, res, next) => {
  res.status(500)
  res.send('<h1>Internal Server Error</h1>')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})