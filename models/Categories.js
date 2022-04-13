const Categories = (sequelize, DataTypes) => {
  const CategorieModel = sequelize.define('Categories', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: DataTypes.STRING,
  },
  {
    timestamps: false,
  });

  return CategorieModel;
};

module.exports = Categories;