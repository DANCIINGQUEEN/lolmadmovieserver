var express = require('express');
var router = express.Router();
const userController = require('../controllers/userControllers');
const multer = require('multer');
const path = require('path');



router.post('/sendVerificationCode', userController.sendVerificationCode)
router.post('/verifyCode', userController.verifyCode)
router.post('/register', userController.register)
router.post('/login', userController.login)
router.get('/getUser',userController.getUser)
module.exports = router;
//d