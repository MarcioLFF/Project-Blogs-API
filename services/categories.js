const { Categories } = require('../models');

const create = async (name) => {
    const created = await Categories.create(name);
    return { ...created.dataValues };
};

const getCategories = async () => {
    const categories = await Categories.findAll();
    return categories;
};

module.exports = {
    create,
    getCategories,
};