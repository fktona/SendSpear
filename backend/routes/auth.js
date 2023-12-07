const {register} = require('../controller/AUTH/auth');
const {login} = require('../controller/AUTH/login');
const router = require('express').Router();

router.post('/auth/signup' , register)
router.post('/auth/login' , login)

module.exports = router