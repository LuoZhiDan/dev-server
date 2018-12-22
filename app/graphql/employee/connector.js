'use strict';

const DataLoader = require('dataloader');

class EmployeeConnector {
  constructor(ctx) {
    this.ctx = ctx;
    this.loader = new DataLoader(this.fetch.bind(this));
  }

  fetch(ids) {
    const employees = this.ctx.app.model.Employee.findAll({
      where: {
        id: {
          $in: ids,
        },
      },
      include: [this.ctx.app.model.Department]
    }).then(us => us.map(u => u.toJSON()));
    
    return employees;
  }

  fetchByIds(ids) {
    return this.loader.loadMany(ids);
  }

  fetchById(id) {
    return this.loader.load(id);
  }

}

module.exports = EmployeeConnector;

