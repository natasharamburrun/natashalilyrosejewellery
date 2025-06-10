/* eslint-disable no-undef */

const connect = require("./connect")
const express = require("express")
const cors = require("cors")
const stock = require("./stockRoutes")

const app = express();
const PORT = 8080

app.use(cors())
app.use(express.json())

app.use(stock)

app.listen(PORT, () => {
    connect.connectToServer()
    console.log(`server started on port ${PORT}`)
})

// const mongoose = require("mongoose");
// const errorHandler = require('./lib/errorHandling');

// // const corsOptions = {
// //     origin: ["https://localhost:5173"],
// // };

// // app.use(cors(corsOptions));


// app.use(errorHandler);


// mongoose.connect('mongodb://127.0.0.1:27017/stock')
//     .then(() => console.log("Connected to MongoDB"))
//     .catch(console.error);


// // Models
// const Stock = require('./models/stock');

// app.get('/stock', async (req, res) => {
// 	const stock = await Stock.find();

// 	res.json(stock);
// });



// app.get("/api", (req, res) => {
//     res.header('Access-Control-Allow-Origin', 'http://localhost:5173'); // Or '*' for development
//     res.header('Access-Control-Allow-Methods', 'GET');
//     res.json({ fruits: ["apples", "pears"] });
// });


// app.listen(8080, () => {
//     console.log("server started on port 8080")
// })