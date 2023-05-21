const express = require("express");
const { ngoRegisterController, ngoLoginController, getAllNgoController } = require("../controllers/ngoController");

//router object
const router = express.Router()

//routes
//POST
router.post('/register', ngoRegisterController );
//login || post
router.post('/login', ngoLoginController);
//all ngo
router.get('/all-ngo', getAllNgoController);

module.exports = router