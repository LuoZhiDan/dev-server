'use strict';
module.exports = {
  Query: {
    department(root, { id }, ctx) {
      return ctx.connector.department.fetchById(id);
    },
    departments(root, args, ctx) {
      return ctx.connector.department.findAll();
    }
  },
  Mutation: {
    createDept(root, args, ctx) {
      return ctx.connector.department.create(args);
    }
  }
};