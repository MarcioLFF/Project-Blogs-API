const jwt = require('jsonwebtoken');
const { Users } = require('../models');

const SECRET = 'MEU_SEGREDO';

const jwtConfig = {
    expiresIn: '15m',
    algorithm: 'HS256',
};

const login = async (email, _password) => {
    const user = await Users.findOne({ where: { email } });
    const token = jwt.sign({ id: user.id, email: user.email }, SECRET, jwtConfig);
    return ({ token });
    };

module.exports = {
    login,
}; 