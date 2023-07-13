module.exports = (sequelize, DataTypes) => {
    const Blog = sequelize.define("blogs", { // "blog" vanara db name dako
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      subTitle: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false
      },
      
    });
    return Blog;
  };
  