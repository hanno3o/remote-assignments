const express = require("express")
const app = express()
const portNum = 3000

// [module][2] 引入/router/books.js 程式
const idolsRouter = require("./router/idols.js") //. => 當前目錄
const aboutRouter = require("./router/about") // .js 可以忽略不寫

/*
idolrouter 就是 router 資料夾下的 idol.js 輸出的那個 router 物件
*/ 

// 路由設定 / end-point設定 / API設計
app.get("/", (req, res) => {
    res.send("Hi, 我是 node.js server")
})


app.get("/getData", (req, res) => {
    let num = Number(req.query.number)
    res.send(`${(1+num)*num/2}`)
})

//[module][3] 將 /idols 的 request，導入到 idolsRouter 處理
//沒有這一步將無法成功運作
app.use("/idols", idolsRouter)
app.use("/about", aboutRouter)

app.listen(portNum, () => {
    console.log(`Server is running at localhost: ${portNum}`)
})