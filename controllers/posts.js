const services = require('../services/posts');

const createPost = async (req, res, _next) => {
    const { title, content, categoryIds } = req.body;
    const created = await services.created({ userId: req.id, title, content, categoryIds });
    return res.status(201).json(created);
};

module.exports = {
    createPost,
};