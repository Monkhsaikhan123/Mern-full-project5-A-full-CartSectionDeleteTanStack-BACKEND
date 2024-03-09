const express = require('express');
const Menu = require('../models/Menu');
const router = express.Router();


//get all menu items
const menuController = require('../controllers/MenuController');

router.get('/', menuController.getAllMenuItems)

module.exports = router;