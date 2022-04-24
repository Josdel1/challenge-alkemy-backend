
const { User } = require('../models/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

module.exports = {
    Login(req, res) {
        let { username, password } = req.body;
        
        User.findOne({
            where: {
                username: username,
            }
        }).then( data => {
            if (!data) {
                res.status(400).json({
                    msg: 'ups!'
                })
            } else {
                if ( bcrypt.compareSync( password, data.password )) {

                    let token = jwt.sign( { user:username }, authConfig.secret, {
                        expiresIn: authConfig.expires
                    } );

                    res.status(200).json( {
                        username: username,
                        token: token,
                    });
                }else {
                    res.status(400).json( {msg:'password incorrect' })
                }
            } 
        }).catch( err => {
            res.status(500).json(err);
        })
    },

    Register(req, res) {
  
        User.create({
                username:req.body.username,
                password:bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.rounds)),
                email: req.body.email,
            }).then( (username) => {
                let token = jwt.sign( { username:username }, authConfig.secret, {
                    expiresIn: authConfig.expires, //why not?
                })

                res.json( {
                    username:username,
                    token: token,
                } )
            } ).catch( err => {
                res.status(500).json(err);
            })
    }


}