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

const getUsersController = async (req, res, _next) => {
    try { 
    const listUsers = await services.getUsers();
    return res.status(200).json(listUsers);
} catch (e) {
    console.log(e.message);
    return res.status(500).end();
}   
};

const getUserById = async (req, res, _next) => {
    try {
    const { id } = req.params;
    const user = await services.getById(id);
    if (!user) {
        return res.status(404).json({ message: 'User does not exist' });
    }
    return res.status(200).json(user);
} catch (e) {
        console.log(e.message);
        return res.status(500).end();
    }   
};

const deleteUser = async (req, res, _next) => {
    const insertId = req.id;
    await services.userDeleted(insertId);
    res.status(204).end();
};

module.exports = {
    createUserController,
    getUsersController,
    getUserById,
    deleteUser,
};