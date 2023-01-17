const express = require("express")
const app = express()
const portNum = 3000


// 路由設定 / end-point設定 / API設計
app.get("/", (req, res) => {
    res.send("Hi, 我是 node.js server")
})

app.listen(portNum, () => {
    console.log(`Server is running at localhost: ${portNum}`)
})