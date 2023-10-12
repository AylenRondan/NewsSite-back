const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.get('/user/:userId/edad', userController.getUserEdad);

module.exports = router;