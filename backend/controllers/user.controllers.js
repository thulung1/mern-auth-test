const User = require("../models/user.models");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const data = await User.create({
      username,
      email,
      password,
    });
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email, password: password });
    if (!user) {
      return res.status(401).json("User doesn't exists");
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "3d",
    });
    return res.cookie("token", token).status(200).json({
      message: "User successfully logged in",
      token: token,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

const logoutUser = async (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).json("User successfully logged out");
  } catch (error) {
    console.error("Error logging out user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};


const refetchProfile = async (req, res)=>{
  const token = req.cookies.token
  if(!token){
    return res.status(401).json("Token is not valid")
  }
  try{
    jwt.verify(token, process.env.JWT_SECRET, {}, (err, data)=>{
      if(err) console.log(err);
      return res.status(200).json(data)
    })
  }catch(err){
    return res.status(500).json("Internal error")
  }
}

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  refetchProfile
};
