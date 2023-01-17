var express = require('express');
var router = express.Router();
const playListController = require('../controllers/playListControllers');

router.get('/', playListController.holy);
router.get('/getall', playListController.getAll);
router.get('/getone', playListController.getOne);
router.post('/create', playListController.create);

module.exports = router;