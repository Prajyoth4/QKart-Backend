const mongoose = require("mongoose");
const app = require("./app");
const config = require("./config/config");

// TODO: CRIO_TASK_MODULE_UNDERSTANDING_BASICS - Create Mongo connection and get the express app to listen on config.port
mongoose.connect(config.mongoose.url)

app.listen(config.port, ()=>{
    console.log("Server running at "+config.port)
})
let server;

