module.exports = (app) => {
    const pet = require('../controllers/petController');
    app.post('/createpet', pet.create);
    app.get('/listpet', pet.findAll);
}
