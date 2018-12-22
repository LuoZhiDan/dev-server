'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/dept.test.js', () => {
  // let authorization;
  // let access_token;
  // before(async () => {
  //   await app.httpRequest()
  //     .get('/authorization')
  //     .expect(200)
  //     .then(res=>{
  //       authorization = res.body.authorization
  //       assert(authorization)
  //     })
  // });

  // it('login', async () => {
  //   return await app.httpRequest()
  //     .post('/login')
  //     .set('Content-Type', 'application/x-www-form-urlencoded')
  //     .set('authorization', authorization)
  //     .send({
  //       grant_type: 'password',
  //       username: 'zdluoa',
  //       password: 'zdluoa',
  //     })
  //     .expect(200)
  //     .then(res=>{
  //       access_token = res.body.token_type +' '+res.body.access_token;
  //     })
  // });


  it('权限验证', () => {
    return app.httpRequest()
      .post('/graphql')
      // .set('Authorization', access_token)
      .send({
          "query": `query queryDept($id: ID!){
            department(id: $id){
              id
              depName
            }
          }`,
          "variables": {
            id: 1
          }
        }
      )
      // .expect(200)
      .then(res => {
        // console.log(res)
        // console.log(res.body);
        console.log(res.body);
      })
  });


});
