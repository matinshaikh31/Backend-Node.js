const express = require("express")
const { handelGenerateNewSortUrl } = require("../controllers")
const router = express.Router()

router.post("/",handelGenerateNewSortUrl)

module.exports = router;