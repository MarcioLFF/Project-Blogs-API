const { Users } = require('../models');

const validateName = async (req, res, next) => {
    const { displayName } = req.body;
    if (displayName.length < 8) {
        return res.status(400)
        .json({ message: '"displayName" length must be at least 8 characters long' });
    }
    next();
};

const validateEmail = async (req, res, next) => {
    const { email } = req.body;
    const regex = /\S+@\S+\.\S+/;

    if (!email || !email.length) {
        return res.status(400).json({ message: '"email" is required' });
    }
    if (regex.test(email) === false) {
        return res.status(400).json({ message: '"email" must be a valid email' });
    }

    next();
};
    
const validadePassword = async (req, res, next) => {
    const { password } = req.body;
    if (!password || password.length === 0) {
        return res.status(400).json({ message: '"password" is required' });
    }
    if (password.length !== 6) {
        return res.status(400).json({ message: '"password" length must be 6 characters long' });
    }
   
    next();
};

const findUser = async (req, res, next) => {
    const { email } = req.body;
    const emailExist = await Users.findOne({ where: { email } });
    if (emailExist) {
        return res.status(409).json({ message: 'User already registered' });
    }
    next();
};

module.exports = {
    validateName,
    validateEmail,
    validadePassword,
    findUser,
};