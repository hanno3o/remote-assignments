const express = require('express')
const router = express.Router()

router.get('/', (req, res) => { 
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

module.exports = router