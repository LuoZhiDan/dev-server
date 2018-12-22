'use strict';
module.exports = {
  Query: {
    user(root, { id }, ctx) {
      return ctx.connector.user.fetchByIds(id);
    },
  },
  Mutation: {
    createUser(root, {name, name_dd }, ctx) {
      return ctx.connector.user.add(name, name_dd);
    }
  }
};