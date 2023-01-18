const express = require("express")
const app = express()
const portNum = 3000

/***引入/router/about.js 程式***/
const aboutRouter = require("./router/about")  // 當前目錄的相對路徑，.js 可以忽略不寫


/***告訴 Express 要使用的樣版引擎是 Pug***/
app.set("view engine", "pug")

/***assignment1***/
// app.get("/", (req, res) => {
//     res.send("<h1>Hello, Server!</h1>")
// })
/***assignment2 - getData***/
app.get("/getData", (req, res) => {
    let num = Number(req.query.number)
    res.send(`${(1+num)*num/2}`)
})

app.get("/", (req, res) => {
    res.render("index") //不需要加上.pug ，因為已經設定了 view engine 是 pug
})


/***將 /about 的 request，導入到 aboutRouter 處理***/
app.use("/about", aboutRouter)

app.listen(portNum, () => {
    console.log(`Server is running at localhost: ${portNum}`)
})