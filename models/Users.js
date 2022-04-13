const Users = (sequelize, DataTypes) => {
  const UserModel = sequelize.define('Users', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  displayName: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  image: DataTypes.STRING,
  },
  {
    timestamps: false,
  });

  UserModel.associate = (models) => {
    UserModel.hasMany(models.BlogPosts, { as: 'posts', foreignKey: 'userId' });
  };

  return UserModel;
};

module.exports = Users;