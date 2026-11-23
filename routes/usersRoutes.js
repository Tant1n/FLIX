const express = require("express")

const {
    authelicate,
    register,
    login,
    checkMe
} = require("../controller/authelicateController")

const router = express.Router()

router.post("/register", register)
router.post("/login", login)
router.post("/me", checkMe)

module.exports = router