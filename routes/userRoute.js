const express = require('express');
const router = express.Router();
const controller = require('../controllers/userCtrl');

router.post('/add', controller.create_user)

router.get('/login', controller.login_user)

module.exports = router;