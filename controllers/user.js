const services = require('../services/user');

const createUserController = async (req, res, _next) => {
    try {
        const { displayName, email, password, image } = req.body;
        const created = await services.createUser(displayName, email, password, image);
        return res.status(201).json(created);
    } catch (e) {
        console.log(e.message);
        return res.status(500).end();
    }   
};

module.exports = createUserController;