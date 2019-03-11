const Controller = require('egg').Controller;
const fs = require('fs');
const path = require('path');

class mockController extends Controller{
    async index() {
        const { ctx } = this;
        console.log( ctx.params )
        try{
            var data;
            if(ctx.params.file.indexOf('.') > -1){
                data = await fs.readFileSync(`./mock/${ctx.params.file}`);
            } else{
                data = await fs.readFileSync(`./mock/${ctx.params.file}.json`);
            }
            ctx.body = JSON.parse(data.toString());
        } catch(e){
            ctx.body = {
                message: '文件不存在'
            }
        }
        
    }
}

module.exports = mockController;