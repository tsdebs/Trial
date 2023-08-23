const mongoose = require("mongoose");
let DB_URL = process.env.DB_URL;
module.exports = async function connection(){
    try {
        mongoose.set("strictQuery", false);
        mongoose.connect("mongodb://0.0.0.0:27017/ivents");
        console.log("succesful connection");
      } catch (err) {
        console.log(err);
      }
    };
