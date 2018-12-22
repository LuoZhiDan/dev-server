module.exports = app => {
    const { STRING, INTEGER, DATE } = app.Sequelize;
  
    const User = app.model.define('user', {
      name: STRING(30),
      pwd: STRING(32),
      name_dd: STRING(255)
    });
  
    return User;
  };