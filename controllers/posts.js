const services = require('../services/posts');

const createPost = async (req, res, _next) => {
    const { title, content, categoryIds } = req.body;
    const created = await services.created({ userId: req.id, title, content, categoryIds });
    return res.status(201).json(created);
};

const getAllPosts = async (req, res, _next) => {
    const posts = await services.getPosts();
    return res.status(200).json(posts);
};

const getById = async (req, res, _next) => {
    const { id } = req.params;
    const postById = await services.getPostsById(id);
    if (!postById) {
        return res.status(404).json({ message: 'Post does not exist' });
    }
    return res.status(200).json(postById); 
};

module.exports = {
    createPost,
    getAllPosts,
    getById,
};