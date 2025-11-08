const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

const home = async (req, res) => {
  try {
    res.status(200).json({ msg: "Welcome to our home page" });
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    const { username, email, phone , password } = req.body;
     const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(400).json({ msg: "email already exists" });
    }

   // hashing password
// const saltRound = 10;
// const hashed_Password = await bcrypt.hash(password, saltRound);

const userCreated = await User.create({ 
  username,
  email,
  phone,
  // password: hashed_Password
  password
});

    // res.status(201).json({ message: "User registered successfully" });
     res.status(201).json({
      msg: "Registration Successful",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });



  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};



const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });

    if (!userExist) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // const user = await bcrypt.compare(password, userExist.password);
    const isPasswordValid = await userExist.comparePassword(password);

    if (isPasswordValid) {

      userExist.lastLogin = new Date(); // store the current time
      await userExist.save(); // save the updated document

      res.status(200).json({
        message: "Login Successful",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ message: "Invalid email or passord " });
    }
  } catch (error) {
    // res.status(500).json({ message: "Internal server error" });
    
     next(error);  // ✅ now next is defined
  }
};

module.exports = { home, register ,login };