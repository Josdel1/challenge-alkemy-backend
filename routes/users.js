const { Router } = require('express');
const router = Router();

module.exports = () => {
    router.get('/testing/', (req,res) => {
        res.json('test');
    })
}