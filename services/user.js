const jwt = require('jsonwebtoken');
const { Users } = require('../models');

const SECRET = 'MEU_SEGREDO';

const jwtConfig = {
    expiresIn: '15m',
    algorithm: 'HS256',
};

const createUser = async (displayName, email, password, image) => {
    await Users.create({ displayName, email, password, image });
    const token = jwt.sign({ data: { displayName, email } }, SECRET, jwtConfig);
    return { token };
};

module.exports = {
    createUser,
};