/* eslint-disable no-undef */

const express = require("express")
const database = require("./connect")
const ObjectId = require("mongodb").ObjectId
require("dotenv").config({path: "./config.env"})

let stockRoutes = express.Router()

//#1 - Retrieve All
//http://localhost:3000/posts
stockRoutes.route("/stock").get(async (request, response) => {
    let db = database.getDb()
    let data = await db.collection("stock").find({}).toArray()
    if (data.length >0) {
        response.json(data)
    } else {
        throw new Error("Data was not found :(")
    }
})

//#2 - Retrieve One
//http://localhost:3000/stock/12345
stockRoutes.route("/stock/:id").get(async (request, response) => {
    let db = database.getDb()
    let data = await db.collection("stock").findOne({_id: new ObjectId(request.params.id)})
    if (Object.keys(data).length >0) {
        response.json(data)
    } else {
        throw new Error("Data was not found :(")
    }
})

//#3 - Create one
stockRoutes.route("/stock").post(async (request, response) => {
    let db = database.getDb()
    console.log(request.body)
    let mongoObject = {
        title: request.body.title,
        description: request.body.description,
        content: request.body.content,
        author: request.body.user._id,
        dateCreated: request.body.dateCreated,
        imageId: request.body.imageId
    }
    let data = await db.collection("stock").insertOne(mongoObject)
    response.json(data)
})

//#4 - Update one
stockRoutes.route("/stock/:id").put(async (request, response) => {
    let db = database.getDb()
    let mongoObject = {
        $set: {
            title: request.body.title,
            description: request.body.description,
            content: request.body.content,
            author: request.body.author,
            dateCreated: request.body.dateCreated,
            imageId: request.body.imageId
        }
    }
    let data = await db.collection("stock").updateOne({_id: new ObjectId(request.params.id)}, mongoObject)
    response.json(data)
})

//#5 - Delete one
stockRoutes.route("/stock/:id").delete(async (request, response) => {
    let db = database.getDb()
    let data = await db.collection("stock").deleteOne({_id: new ObjectId(request.params.id)})
    response.json(data)
})

module.exports = stockRoutes