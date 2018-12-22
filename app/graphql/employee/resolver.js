'use strict';
module.exports = {
  Query: {
    employee(root, { id }, ctx) {
      return ctx.connector.employee.fetchById(id);
    },
  },
  Mutation: {
    createEmp(root, { emp } , ctx) {
      return ctx.app.model.Employee.create(emp);
    }
  }
};