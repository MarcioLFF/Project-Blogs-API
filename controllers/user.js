const { Users } = require('../models');

const createUser = async (req, res, _next) => {
    try {
        const { displayName, email, password, image } = req.body;
        const created = await Users.create({ displayName, email, password, image });
        return res.status(201).json(created);
    } catch (e) {
        console.log(e.message);
        return res.status(500).end();
    }   
};

module.exports = createUser;