/* eslint-disable no-undef */

const express = require("express")
const database = require("./connect")
const ObjectId = require("mongodb").ObjectId
require("dotenv").config({path: "./config.env"})

const { S3Client, PutObjectCommand, GetObjectCommand } = require("@aws-sdk/client-s3")

let awsRoutes = express.Router()
// const s3Bucket = "natashalilyrosestorage"

const s3Client = new S3Client({
    region: "eu-west-2",
    Credential: {
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_KEY
    }

})

exports.getObject = async(key) => {
    try {
        const params = {
            Bucket: process.env.AWS_S3_BUCKET, 
            Key: key,
        }

        const command = new GetObjectCommand(params);
        const data = await s3Client.send(command)

        console.log(data)
    } catch(err) {
        console.log(err)
    }
}

module.exports = awsRoutes