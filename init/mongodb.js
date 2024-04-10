const mongoose = require('mongoose');

const connectionUrl = "mongodb+srv://sachinthadilshan:abcd1234@itppro1.d6u6lyh.mongodb.net/todo_app?retryWrites=true&w=majority";

const connectMongodb = async()=>{
    try {
        await mongoose.connect(process.env.CONNECTION_URL);
        console.log("Database connection successful");   
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

module.exports = connectMongodb;