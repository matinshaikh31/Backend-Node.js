const URL = require("../models/url.js");
const shortid  = require("shortid");
const handelGenerateNewSortUrl = async (req, res) => {
  const body = req.body;
  if (!body.url) return res.status(400).json({ err: "url is required" });
  const shortId = shortid()
  await URL.create({
    shortId: shortId,
    redirectUrl: body.url,
    visitHistory:[]
  });
  return res.json({id :shortId})
};
module.exports = {
    handelGenerateNewSortUrl
}
