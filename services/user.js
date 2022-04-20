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

const getUsers = async () => {
    const users = await Users.findAll({ attributes: { exclude: ['password'] } });
    return users;
};

const getById = async (id) => {
    const user = await Users.findByPk(id, { attributes: { exclude: ['password'] } });
    return user;
};

const userDeleted = async (insertId) => {
    await Users.destroy({ where: { id: insertId } });
};

module.exports = {
    createUser,
    getUsers,
    getById,
    userDeleted,
};