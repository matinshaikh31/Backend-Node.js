const { getUser } = require("../service/auth");

function checkForAuthorization(req, res, next) {
  const tookencookie = req.cookies?.token;
  req.user = null;

  if (!tookencookie) return next();
  const token = tookencookie;
  const user = getUser(token);
  req.user = user;
  return next();
}

function restictTo(role = []) {
  return function (req, res, next) {
    if (!req.user) return res.redirect("/login");

    if (!role.includes(req.user.role)) return res.end("unAuthrized");

    next();
  };
}

module.exports = {
  checkForAuthorization,
  restictTo,
};
