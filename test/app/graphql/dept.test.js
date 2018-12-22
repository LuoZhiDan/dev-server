'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/graphql/dept.test.js', () => {
  let dept;

  before(async () => {
    dept = await app.model.Department.create({
      depName: 'test-name',
      parentId: 0
    });
  });

  it('department query id', async () => {
    const ctx = app.mockContext();
    const query = JSON.stringify({
      query: `{ department(id: ${dept.id}) { id depName } }`,
    });

    const data = await ctx.service.graphql.query(query);
    assert.equal(data.data.department.id, dept.id);
    assert.equal(data.data.department.depName, dept.depName);
  });

  after(async () => {
    // await app.model.Department.destroy({ where: { id: dept.id } });
  });
});
