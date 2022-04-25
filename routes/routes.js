const express = require('express');
const router = express.Router();

const AuthController = require('../controllers/AuthController');
const auth = require('../middlewares/auth');

const {
    getAllCharacters,
    getCharacter,
    createCharacter,
    editCharacter,
    deleteCharacter,
} = require('../controllers/CharacterController');

// Home
router.get('/', (req, res) => res.json({ hello: "World" }));


// Auth (Register & Login)
router.post('/auth/login', AuthController.Login);
router.post('/auth/register', AuthController.Register);

//Characters

router.get('/characters', auth, getAllCharacters);
router.get('/characters/:id', auth, getCharacter);
router.post('/characters/create', auth, createCharacter);
router.put('/characters/edit/:id', auth, editCharacter);
router.delete('/characters/delete/:id', auth, deleteCharacter);

module.exports = router;