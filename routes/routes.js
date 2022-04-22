const express = require('express');
const router = express.Router();

const AuthController = require('../controllers/AuthController');

// Home
router.get('/', (req, res) => res.json({ hello: "World" }));


// Auth (Register & Login)
router.post('/auth/login', AuthController.Login);
router.post('/auth/register', AuthController.Register);
module.exports = router;