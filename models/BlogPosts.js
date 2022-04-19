const BlogPosts = (sequelize, DataTypes) => {
  const BlogPostsModel = sequelize.define('BlogPosts', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: { type: DataTypes.INTEGER, foreingKey: true },
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, 
  {
  timestamps: false,
  });
  BlogPostsModel.associate = (models) => {
    BlogPostsModel.belongsTo(models.Users, {
      as: 'user',
      foreingKey: 'userId',
    });
  };
  return BlogPostsModel;
};

module.exports = BlogPosts;