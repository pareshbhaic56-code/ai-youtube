const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        app: "AI YouTube Studio",
        status: "Running",
        version: "1.0.0"
    });
});

app.get("/health", (req, res) => {
    res.json({
        success: true,
        message: "Server is working."
    });
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server Started");
});
