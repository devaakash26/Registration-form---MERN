const User = require("../models/user");
const bcrypt = require("bcrypt");
const createUser = async (req, res) => {
    try {
        const { name, email, mobile, password } = req.body;

        // Check if the email already exists
        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            return res.status(409).json({ error: "Email already exists" });
        }

        // Check if the mobile number already exists
        const existingMobile = await User.findOne({ mobile: mobile });
        if (existingMobile) {
            return res.status(401).json({ error: "Mobile number already exists" });
        }

        // Create a new user if the email and mobile don't exist
        const newUser = await User.create({ name, email, mobile, password });
        res.status(201).json({ msg: "User created successfully" });
    } catch (error) {
        res.status(500).json({ error: "Could not create user" });
    }
};



const login = async (req, res) => {

    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });

        if (!user) {
            return res.status(400).json({ error: "User not found" });
        }
        const Password = await bcrypt.compare(password, user.password);
        if (Password) {
            res.status(200).json({ message: "Login successful" });

        }
        else {
            res.status(401).json({ error: "Incorrect Password" });

        }

    } catch (error) {
        res.status(500).json({ error: "An error occurred during login" });
    }
}

const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        res.json({ user });
    } catch (error) {
        res.status(500).json({ error: "An error occurred while fetching user" });
    }
}

module.exports = { createUser, login, getUser };
