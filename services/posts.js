const { BlogPosts } = require('../models');
const { Users } = require('../models');
const { Categories } = require('../models');

const created = async (title, id, content, categoryIds) => {
    const create = await BlogPosts.create(title, id, content, categoryIds);
    return create;
};

const getPosts = async () => {
    const posts = await BlogPosts.findAll({ include: [{
        model: Users, as: 'user' },
        { model: Categories, as: 'categories', through: { attributes: [] },
    }],
});
    return posts;
};

module.exports = {
    created,
    getPosts,
};