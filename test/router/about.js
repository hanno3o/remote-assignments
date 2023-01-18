const express = require("express")
const router = express.Router()

router.get(("/"),(req,res) => {
    res.send("我是 /about 的根路徑")
})

//about/testqq?name=Jennifer
router.get(("/testqq"), (req,res) => {
    let name = req.query.name
    res.send(`我是 /about/name，你好 ${name}`)
})

module.exports = router


