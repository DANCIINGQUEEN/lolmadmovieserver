const express = require('express');
const router = express.Router();
const memoControl = require('../controllers/memoControllers');

router.get('/hello', memoControl.hello);
router.get('/find', memoControl.getAll);
router.post('/create', memoControl.create)
router.delete('/delete/:id', memoControl.delete)
router.put('/update/:id', memoControl.update)

module.exports = router;