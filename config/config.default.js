'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + 'zdluoa';

  // 配置数据源
  config.sequelize = {
    dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
    database: 'graphql',
    host: '118.25.127.172',
    port: '3306',
    username: 'root',
    password: '123456',
  };

  // 配置gql
  config.graphql = {
    router: '/graphql',
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  // 剔除csrf校验
  config.security = {
    csrf: {
      ignore: () => true,
    },
  }

  // 配置oath2鉴权
  config.oAuth2Server = {
    grants: ['password'], // 密码模式
  };

  config.error = {
    match: '/graphql',
  };

  // 配置鉴权中间件
  config.oauth = {
    match: '/graphql',
  };

  // 配置中间件
  // config.middleware = ['error', 'oauth', 'graphql'];
  config.middleware = ['error', 'graphql'];

  return config;
};
