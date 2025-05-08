const db = require('../db/db');

const usermodel = {
    finduser: async (user) => {
        const [rows] = await db.execute('SELECT * FROM user WHERE name = ?', [user]);
        return rows.length > 0;
    },
    insertuser: async (user, password) => {
        if(user.length > 30 || password.length > 30){
            throw new Error('아이디 또는 비밀번호가 30자가 넘어갑니다.');
        }
        const [rows] = await db.execute('INSERT INTO user (name, password) VALUES (?, ?)', [user, password]);
        return true;
    }
}

module.exports = usermodel;////