const { Router } = require('express');
const usercontroller = require('../controller/usercontoller');
const router = Router();

router.get('/', usercontroller.home);
router.get('/signup', usercontroller.signup);
router.post('/signup', usercontroller.submitsignup);
//