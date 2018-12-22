module.exports = app => {
    const { STRING, INTEGER, DATE } = app.Sequelize;

    const Employee = app.model.define('employee', {
        name: STRING,
        pwd: STRING,
        deptId: INTEGER,
        // 部门状态 0: 正常， 1: 离职 2: 停用
        status: {
            type: INTEGER,
            defaultValue: 0 // 设置默认值
        }
    });

    return Employee;
};