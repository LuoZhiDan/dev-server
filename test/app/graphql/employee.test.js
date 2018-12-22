'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/graphql/employee.test.js', () => {
  let employee;

  before(async () => {
    employee = await app.model.Employee.create({
      name: 'test-name',
      deptId: 1
    });
  });

  it('employee query id', async () => {
    const ctx = app.mockContext();
    const query = JSON.stringify({
      query: `{ employee(id: ${employee.id}) { id name } }`,
    });

    const data = await ctx.service.graphql.query(query);
    assert.equal(data.data.employee.id, employee.id);
    assert.equal(data.data.employee.name, employee.name);
  });

  after(async () => {
    // await app.model.Department.destroy({ where: { id: dept.id } });
  });
});
