var PetService = require('../services/petService');
exports.findAll = (req, res) => {
    PetService.FindAll()
    .then(pets => {
        res.send(pets);
    })
};
exports.create = (req, res) => {
    PetService.Create(req);
};
