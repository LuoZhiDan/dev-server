'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  // 获取秘钥
  router.all('/authorization', controller.authorization.index);

  // 登录
  router.all('/login', app.oAuth2Server.token());

  // 上传文件
  router.post('/upload', controller.upload.index);
};
