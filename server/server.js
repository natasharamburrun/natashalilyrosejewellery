/* eslint-disable no-undef */

const connect = require("./connect")
const express = require("express")
const cors = require("cors")
const stock = require("./stockRoutes")

const awsRoutes = require("./awsroutes")

const app = express();
const PORT = 8080

app.use(cors())
app.use(express.json())

app.use(stock)
app.use(awsRoutes)


app.listen(PORT, () => {
    connect.connectToServer()
    console.log(`server started on port ${PORT}`)
})