const express = require('express');
const app = express();
const cors = require("cors");
const dbConnect = require("./config/dbConnect");
const { createUser, login, getUser } = require('./controller/userctrl');


const option={
    origin:"http://localhost:5173",
    methods:"GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials:true
}

app.use(cors(option));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



dbConnect();

// Route for creating a user
app.post('/api/user/', createUser);
app.post('/api/user/login', login)
app.get('/api/user/:id', getUser)




const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
})