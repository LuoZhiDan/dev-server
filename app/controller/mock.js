const Controller = require('egg').Controller;
const fs = require('fs');
const path = require('path');

class mockController extends Controller{
    async index() {
        const { ctx } = this;
        var data = await fs.readFileSync('./mock/20181225.json');
        ctx.body = JSON.parse(data.toString());
    }
}

module.exports = mockController;