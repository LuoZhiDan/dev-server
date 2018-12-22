/**
 * 权限校验
 */

module.exports = () => {
    return async function(ctx, next) {
        var fun = ctx.app.oAuth2Server.authenticate();
        await fun(ctx, next);
    };
};
