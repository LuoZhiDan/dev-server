'use strict';

const DataLoader = require('dataloader');

class DepartmentConnector {
  constructor(ctx) {
    this.ctx = ctx;
    this.loader = new DataLoader(this.fetch.bind(this));
  }

  fetch(ids) {
    const depts = this.ctx.app.model.Department.findAll({
      where: {
        id: {
          $in: ids,
        },
      },
    }).then(us => us.map(u => u.toJSON()));
    return depts;
  }

  fetchByIds(ids) {
    return this.loader.loadMany(ids);
  }

  fetchById(id) {
    return this.loader.load(id);
  }

  findAll() {
    const depts = this.ctx.app.model.Department.findAll()
      .then(us => us.map(u => u.toJSON()));
    return depts;
  }

  create(args) {
    const dept = this.ctx.app.model.Department.create(args);
    return dept;
  }
}

module.exports = DepartmentConnector;

