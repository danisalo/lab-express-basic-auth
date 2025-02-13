const router = require("express").Router()
const bcrypt = require('bcryptjs')

//Model
const User = require('./../models/User.model')

// Middlewares
const { isLoggedOut } = require('../middlewares/route-guard')
const { isLoggedIn } = require('../middlewares/route-guard')

// Homepage
router.get("/", (req, res, next) => {
  res.render("index")
})

module.exports = router
