const { Character,Movie } = require('../models/index');

module.exports = {
    getAllCharacters(req,res){
        Character.findAll({
            include: {
                model: Movie,
                as: "Movies",
                attributes:['title',]
            },
            attributes: ['name', 'age']
        })
        .then( (characters) => {
            res.status(200).json({
                'Characters':characters
            })
        } )
    },
    getCharacter(req,res){
        Character.findByPk(req.params.id,{
            include: {
                model: Movie,
                as: "Movies",
                attributes:['title', ]
            },
        })
        .then( (character) => {
            if(character){
                res.status(200).json({'Character':character});
            }
            else{
                res.status(400).json({
                    msg:'character not found',
                });
            }
        })
        .catch( err => res.status(400).json( err ) )
    },
    createCharacter(req,res) {
        Character.create( {
            img: req.body.img,
            name: req.body.name,
            age: req.body.age,
            weight: req.body.weight,
            story: req.body.story
        }).then( (character) => {
            //console.log('character successfully created');

            res.status(200).json({
                msg: 'character successfully created',
                character: character
            })

        } ).catch( err => res.status(400).json(err) );
    },
    editCharacter(req,res){

    },
    async deleteCharacter(req,res){
        const Id = req.params.id;
        const existCharacter = await Character.findOne({
            where: {
                id:Id
            }
        });
        // console.log(existCharacter)
        
        if(existCharacter){
            await Character.destroy({
                where:{
                    id: req.params.id
                }
            })
            .then( () => res.status(200).json({msg:'character successfully deleted'}))
            .catch( err => console.log(err));
        }else{
            res.status(400).json({
                msg:'character not found'
            })
        }
    }
}