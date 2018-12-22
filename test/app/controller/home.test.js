'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/home.test.js', () => {
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
  //       console.log(res.body);
  //       access_token = res.body.token_type +' '+res.body.access_token;
  //     })
  // });


  // it('权限验证', () => {
  //   // app.mockCsrf();
  //   return app.httpRequest()
  //     .post('/graphql')
  //     // .set('Authorization', access_token)
  //     .send({
  //         // operationName:"createUser2",
  //         "query": `query{
  //           user(id: [1,2,3,4]){
  //             id
  //             name
  //             name_dd
  //           }
  //         }`,
  //         "variables": {
  //           name: 'zdluoa',
  //           name_dd: 'as'
  //         }
  //       }
  //     )
  //     // .expect(200)
  //     .then(res => {
  //       // console.log(res)
  //       // console.log(res.body);
  //       console.log(res.body);
  //     })
  // });


});
