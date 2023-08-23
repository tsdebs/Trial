const router = require("./routes/index.route")
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const bcrypt = require("bcrypt");
require("express-async-errors");
const connection = require("./db");
const port = 8050;
const jwt = require("jsonwebtoken");
  
connection();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", router);


app.use((error, req, res, next) =>{
    res.status(500).json({ error: error.message});
});

app.listen(port,()=>{
    console.log("Listening to port", port);
});

module.exports = app;








