const express = require("express")
const { getAllRestros, registerController, loginController } = require("../controllers/restroController")

//router object
const router = express.Router()

//get all restros || get
router.get('/all-restros', getAllRestros)

//create user || post
router.post('/register', registerController)

// login || post
router.post('/login', loginController)

module.exports = router