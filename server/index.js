const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = {
    origin: ["https://localhost:5173"],
};

app.use(cors(corsOptions));

app.get("/api", (req, res) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173'); // Or '*' for development
    res.header('Access-Control-Allow-Methods', 'GET');
    res.json({ fruits: ["apples", "pears"] });
});

app.listen(8080, () => {
    console.log("server started on port 8080")
})