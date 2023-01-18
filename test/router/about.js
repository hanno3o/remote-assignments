const express = require("express") 
const router = express.Router() //產生router物件 存入變數

/*** 一樣是路由設定 / end-point設定 / API設計***/
router.get(("/"),(req,res) => {
    res.send("我是 /about 的根路徑")
})

//about/testqq?name=Jennifer
router.get(("/testqq"), (req,res) => {
    let name = req.query.name
    res.send(`我是 /about/name，你好 ${name}`)
})

/***將 router 輸出，等待被 require 引入使用***/
module.exports = router


