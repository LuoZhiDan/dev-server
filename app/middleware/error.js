/**
 * 同意错误处理
 */

module.exports = () => {
    return async function error(ctx, next) {
        try {
            await next();
        } catch (err) {
            // 所有的异常都在 app 上触发一个 error 事件，框架会记录一条错误日志
            ctx.app.emit('error', err, ctx);
            const status = err.status || 500;
            if (status == 500) {
                ctx.body = {
                    code: 500,
                    msg: '系统错误'
                }
            } else if(status == 422){
                ctx.body = {
                    code: 422,
                    msg: '参数格式不对'
                }
            } else if(status == 401){
                ctx.body = {
                    code: 401,
                    msg: '没有权限'
                }
            }

            ctx.status = 200;
        }
    };
};
