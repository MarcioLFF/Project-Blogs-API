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

const updatePost = async (req, res, _next) => {
    const { title, content, categoryIds } = req.body;
    const { id } = req.params;
    if (categoryIds) {
        return res.status(400).json({ message: 'Categories cannot be edited' });
    }
    if (!title) {
        return res.status(400).json({ message: '"title" is required' });
    }
    if (!content) {
        return res.status(400).json({ message: '"content" is required' });
    }
    const insertId = req.id; // id que vem do token criptografado
    const updated = await services.updatedPost(title, content, id, insertId); // passo como parâmetro para o service
    if (updated.message) {
        return res.status(401).json({ message: 'Unauthorized user' });
    }
    return res.status(200).json(updated);
};

module.exports = {
    createPost,
    getAllPosts,
    getById,
    updatePost,
};