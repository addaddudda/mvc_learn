const db = require('../db/db');

const post = {
    uploadpost: async (postname, postdetail) => {
        const [rows] = await db.execute('INSERT INTO post (postname, postdetail) VALUES (?, ?)'[postname, postdetail]);
        return rows.length > 0;
    }
}

module.exports = post;