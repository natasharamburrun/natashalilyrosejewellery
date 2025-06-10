/* eslint-disable no-undef */

const express = require("express")
const database = require("./connect")
const ObjectId = require("mongodb").ObjectId
require("dotenv").config({path: "./config.env"})

const { S3Client, PutObjectCommand, GetObjectCommand, DeleteObjectCommand } = require("@aws-sdk/client-s3")

let awsRoutes = express.Router()
const s3Bucket = "natashalilyrosestorage"

const s3Client = new S3Client({
    region: "eu-west-2",
    Credential: {
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_KEY
    }

})

//#1 - Retrieve One
awsRoutes.route("/image/:id").get(async (request, response) => {
    const id = request.params.id
    const bucketParams = {
        bucket: s3Bucket,
        key: id,
    }
    const data = await s3Client.send(new GetObjectCommand(bucketParams))
    const contentType = data.contentType
    const srcString = await data.body.transformToString("base64")
    const imageSource = `data:${contentType};base64, ${srcString}`

    response.json(imageSource)
})

module.exports = awsRoutes