var Pet = require('../models/petModel');
const PetService = {
    FindAll: (req) => {
        return Pet.find();
    },
    Create: ("/",async(req,res) => {
        console.log(req.body)
        var data = new Pet({
            name:req.body.name,
            animal:req.body.animal,
            breed:req.body.breed,
            age:req.body. age,
            gender:req.body.gender,
            description:req.body.description,
            image:req.body.image
        });
        data.save();
        res.json(data);
        
    })
}
module.exports = PetService;
