const { Categories } = require('../models');

const validateTitle = async (req, res, next) => {
    const { title } = req.body;
    if (!title) {
        return res.status(400).json({ message: '"title" is required' });
    }
    next();
};

const validateContent = (req, res, next) => {
    const { content } = req.body;
    if (!content) {
        return res.status(400).json({ message: '"content" is required' });
    }
    next();
};

const ValidateCatId = (req, res, next) => {
    const { categoryIds } = req.body;
    if (!categoryIds) {
        return res.status(400).json({ message: '"categoryIds" is required' });
    }
    next();
};

const verifyCatId = async (req, res, next) => {
    const { categoryIds } = req.body;
    const foundCatId = await Categories.findAll({ where: { id: categoryIds } });
    if (!foundCatId.length) {
        return res.status(400).json({ message: '"categoryIds" not found' });
    }
    next();
 };

module.exports = {
    validateTitle,
    validateContent,
    ValidateCatId,
    verifyCatId,
};