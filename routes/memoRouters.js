const express = require('express');
const router = express.Router();
const titleAndContentControl = require('../controllers/memoControllers');

router.get('/hello', titleAndContentControl.hello);
router.get('/find', titleAndContentControl.getAll);
router.post('/create', titleAndContentControl.create)
router.delete('/delete/:id', titleAndContentControl.delete)

module.exports = router;