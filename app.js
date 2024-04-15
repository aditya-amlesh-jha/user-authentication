const express = require("express")
const authRouter = require("./router/auth_routes.js")
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth",authRouter);

app.listen(process.env.PORT,()=>{
    console.log(`Listening on port ${process.env.PORT}`)
})