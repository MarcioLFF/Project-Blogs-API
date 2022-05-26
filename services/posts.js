const { BlogPosts } = require('../models');
const { Users } = require('../models');
const { Categories } = require('../models');

const created = async (title, id, content, categoryIds) => {
    const create = await BlogPosts.create(title, id, content, categoryIds);
    return create;
};

const getPosts = async () => {
    const posts = await BlogPosts.findAll({ include: [{
        model: Users, as: 'user', attributes: { exclude: ['password'] } },
        { model: Categories, as: 'categories', through: { attributes: [] },
    }],
});
    return posts;
};

const getPostsById = async (id) => {
    const getPostId = await BlogPosts.findByPk(id, { include: [{
        model: Users, as: 'user', attributes: { exclude: ['password'] } },
        { model: Categories, as: 'categories', through: { attributes: [] }, // entender
    }],
});
    return getPostId;
};

const updatedPost = async (title, content, id, insertId) => {
    const getPost = await BlogPosts.findByPk(id);
    // console.log(getPost.id);
    if (getPost.userId !== insertId) { // verifico se o id do usuário que cadastrou o post é o mesmo que logou com o token
        return { message: 'Unauthorized' };
    }
    const getCat = await Categories.findByPk(id); // para conseguir pegar as categorias
    await BlogPosts.update({ title, content }, { where: { id } });
    return {
        id: getPost.dataValues.id,
        title,
        content,
        userId: getPost.dataValues.userId,
        categories: [getCat.dataValues],    
    };
};

const postDeleted = async (res, id, insertId) => {
    const getPost = await BlogPosts.findByPk(id);
    if (!getPost) {
        return res.status(404).json({ message: 'Post does not exist' });
    }
    if (getPost.userId !== insertId) {
        return { message: 'Unauthorized' };
    }
   const deleted = await BlogPosts.destroy({ where: { id } });
   return deleted;
};

module.exports = {
    created,
    getPosts,
    getPostsById,
    updatedPost,
    postDeleted,
};