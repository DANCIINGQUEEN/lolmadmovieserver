var express = require('express');
var router = express.Router();
const lmmController = require('../controllers/lmmControllers');

router.get('/', lmmController.hello);
router.get('/fuck', lmmController.fuckYou);
router.get('/kill', lmmController.kill);
router.get('/hi', lmmController.hi);
router.get('/ho', lmmController.ho);
router.get('/find', lmmController.getAll);
router.post('/pp', lmmController.create)
router.delete('/delete/:id', lmmController.delete)
router.get('/sex', lmmController.sex)

module.exports = router;