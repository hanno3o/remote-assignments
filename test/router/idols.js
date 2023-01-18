// 建立 router
const express = require("express")
const router = express.Router() //產生router物件 存入變數

// 一樣是路由設定 / end-point設定 / API設計
router.get("/", (req, res) => {
    res.send("我是 /idols 的根路徑")
})

router.get("/page", (req, res) => {
    res.json({message: "我是 /idols/page 的路徑！"}) //.json就是會拋一個 JSON 的資料
})

// [module][1] 將 router 輸出，等待被 require 引入使用
module.exports = router