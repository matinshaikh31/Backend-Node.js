const JWT = require("jsonwebtoken");
const secret = "matin123";

function createTokenForAUser(user) {
  const payload = {
    _id: user._id,
    email: user.email,
    profileImgUrl: user.profileImgUrl,
    role: user.role,
  };
  const token = JWT.sign(payload, secret);

  return token;
}

function validateToken(token) {
  const payload = JWT.verify(token, secret);    
  return payload;   
}

module.exports = {
    createTokenForAUser,
    validateToken
}