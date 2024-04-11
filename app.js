const express = require("express")
const authRouter = require("./router/auth_routes.js")
const app = express()

app.use("/auth",authRouter);

app.listen(process.env.PORT,(req,res)=>{
    console.log(`Listening on port ${process.env.PORT}`)
})