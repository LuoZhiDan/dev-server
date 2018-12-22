module.exports = (app) => {
  app.beforeStart(async () => {
    app.model.Employee.belongsTo(app.model.Department, {foreignKey: 'deptId'});
    await app.model.sync();
  });
};
