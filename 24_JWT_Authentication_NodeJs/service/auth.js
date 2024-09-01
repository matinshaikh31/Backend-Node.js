const jwt = require("jsonwebtoken")
const secret = "Matinshaikh31"

function setUser( user){
   return jwt.sign({
    _id:user._id,
    email:user.email,
    
   },secret)
}

function getUser(token){
    if(!token) return null
   return jwt.verify(token,secret)
}

module.exports={
    setUser,
    getUser
};
