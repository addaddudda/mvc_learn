const postcontroller = require('../controller/postcontroller');
const ROUTER = require('express');
const { router } = ROUTER();

router.get('/post', postcontroller.postcontroller);
router.post('/post', postcontroller.postcontroller);
