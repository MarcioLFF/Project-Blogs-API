const { BlogPosts } = require('../models');

const created = async (title, id, content, categoryIds) => {
    const create = await BlogPosts.create(title, id, content, categoryIds);
    return create;
};

module.exports = {
    created,
};