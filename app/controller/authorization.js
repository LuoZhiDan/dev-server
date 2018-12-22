'use strict';
const path = require('path');
const nconf = require('nconf');
const Controller = require('egg').Controller;


module.exports = app => {
    nconf.use('file', {
        file: path.join(app.config.baseDir, 'app/config.json'),
    });
    
    class AuthorizationController extends Controller {
        async index() {
            var client = nconf.get('client');
            this.ctx.body = {
                authorization: 'Basic ' + new Buffer(client.clientId  + ':'  + client.clientSecret).toString('base64')
            }
        }
    }

    return AuthorizationController;
 }