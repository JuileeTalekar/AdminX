const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});


// hashing password 
userSchema.pre("save", async function (next) {
  const user = this;
//   console.log("actual data ", this);

  if (!user.isModified("password")) {
  return next();
}

  try {
    const saltRound = await bcrypt.genSalt(10);
    const hashed_Password = await bcrypt.hash(user.password, saltRound);
    user.password = hashed_Password;
  } catch (error) {
    return next(error);
  }
});



// Generating  JSON Web Token
userSchema.methods.generateToken = async function () {
  console.log("token");
  try {
    return jwt.sign(
      {
        userId: this._id.toString(),
        email: this.email,
        isAdmin: this.isAdmin,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "30d",
      }
    );
  } catch (error) {
    console.error("Token Error: ", error);
  }
};



// userSchema.methods.generateToken = function () {
//   const payload = { id: this._id.toString(), email: this.email }; // include id/email
//   return jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: "1d" });
// };


userSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};


const User = mongoose.model("User", userSchema);

module.exports = User;