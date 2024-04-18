const { default: mongoose } = require("mongoose")

const dbConnect = () => {
    try {
        const conn = mongoose.connect('mongodb://localhost:27017/user');
        console.log("Database Successfully Connected")
    }
    catch (error) {
        console.log("Database Error");
    }
}
module.exports =dbConnect;