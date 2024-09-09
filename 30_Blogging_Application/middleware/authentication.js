const { validateToken } = require("../services/auth");

function checkForAuthentictionCokkie(cookieName) {
  return (req, res, next) => {
    const tokencokkievalue = req.cookies[cookieName];
    if (!tokencokkievalue) {
     return next();
    }
    try {
      const userPayLoad = validateToken(tokencokkievalue);
      req.user = userPayLoad;

    } catch (error) {}  
    return next();
  };
}

module.exports = {
  checkForAuthentictionCokkie,
};
