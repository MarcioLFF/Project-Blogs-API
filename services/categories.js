const { Categories } = require('../models');

const create = async (name) => {
    const created = await Categories.create(name);
    return { ...created.dataValues };
};

module.exports = {
    create,
};