const Users = (sequelize, DataTypes) => {
  const UserModel = sequelize.define('User', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  displayName: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  image: DataTypes.STRING,
  },
  {
    timestamps: false,
  });

  Users.associate = (models) => {
    Users.hasMany(models.BlogPosts, { as: 'posts', foreignKey: 'userId' });
  };

  return UserModel;
};

module.exports = Users;