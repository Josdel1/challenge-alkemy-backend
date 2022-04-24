const express = require('express');
const router = express.Router();

const AuthController = require('../controllers/AuthController');

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

router.get('/characters', getAllCharacters);
router.get('/characters/:id', getCharacter);
router.post('/characters/create', createCharacter);
router.put('/characters/edit/:id', editCharacter);
router.delete('/characters/delete/:id', deleteCharacter);

module.exports = router;