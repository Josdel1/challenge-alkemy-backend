const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

module.exports = (req,res,next) => {

    const hAuth = req.headers.authorization;

    if(!hAuth) {
        res.status(400).json({
            msg: 'Access denied'
        });
    }else {
       let token = hAuth.split(' ')[1];
       
       jwt.verify(token, authConfig.secret, (error, decoded) => {
           if(error) {
            res.status(500).json({
                msg: 'A mistake has occurred',
            });

           } else {
                req.username = decoded;
                next();
           }
       })
    }
}