const Controller = require('egg').Controller;
const fs = require('mz/fs');
const path = require('path');

class uploadController extends Controller{
    async index() {
        const { ctx } = this;
        const file = ctx.request.files[0];
        console.log( file )
    
        /* ctx.body = {
          url: '',
          requestBody: ctx.request.body,
        }; */
    }
}

module.exports = uploadController;