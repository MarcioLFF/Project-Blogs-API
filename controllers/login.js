const services = require('../services/login');
const { Users } = require('../models');

const login = async (req, res, _next) => {
    try {
        const { email, password } = req.body;
        const user = await Users.findOne({ where: { email } });
        if (!user) {
            return res.status(400).json({ message: 'Invalid fields' });
        }
        const tokenController = await services.login(email, password);
        return res.status(200).json(tokenController);
    } catch (e) {
        console.log(e.message);
        return res.status(500).end();
    }
};

module.exports = {
    login,
};
