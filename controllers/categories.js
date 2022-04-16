const services = require('../services/categories');

const createCategory = async (req, res, _next) => {
    const { name } = req.body;
    const created = await services.create({ name });
    res.status(201).json(created);
};

module.exports = {
    createCategory,
};