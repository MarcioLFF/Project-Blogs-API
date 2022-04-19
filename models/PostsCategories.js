const PostCategories = (sequelize, _DataTypes) => {
  const PostCategoriesModel = sequelize.define('PostsCategories', {},
  { timestamps: false });

  PostCategoriesModel.associate = (models) => {
    models.BlogPosts.belongsToMany(models.Categories, 
     { 
      as: 'categories', 
      through: PostCategoriesModel,
      foreignKey: 'postId',
      otherKey: 'categoryId',
     });

     models.Categories.belongsToMany(models.BlogPosts,
  { as: 'blogposts', through: PostCategoriesModel, foreignKey: 'categoryId', otherKey: 'postId' });
  };
  return PostCategoriesModel;
};

module.exports = PostCategories;