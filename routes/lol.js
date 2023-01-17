const express = require('express');
const router = express.Router();
const lmmController = require('../controllers/lmmControllers');

router.get('/hello', lmmController.hello);
router.get('/find', lmmController.getAll);
router.post('/create', lmmController.create)
router.delete('/delete/:id', lmmController.delete)

module.exports = router;