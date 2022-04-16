const services = require('../services/categories');

const createCategory = async (req, res, _next) => {
    const { name } = req.body;
    const created = await services.create({ name });
    res.status(201).json(created);
};

const listCategories = async (req, res, _next) => {
    const listAll = await services.getCategories();
    return res.status(200).json(listAll);
};

module.exports = {
    createCategory,
    listCategories,
};