const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatControllers');

router.get('/hi', chatController.hi)


module.exports=router