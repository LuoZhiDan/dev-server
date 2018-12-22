/**
 * 部门模型
 */

module.exports = app => {
    const {
        STRING,
        INTEGER,
        DATE
    } = app.Sequelize;

    const Department = app.model.define('department', {
        depName: STRING, // 部门名称
        parentId: {
            type: INTEGER,// 上级部门ID
            defaultValue: 0 // 设置默认值 0表示顶级部门
        },
        // 部门状态 0: 正常， 1: 删除
        status: {
            type: INTEGER,
            defaultValue: 0 // 设置默认值
        }
    });

    return Department;
};