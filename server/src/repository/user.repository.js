const db = require("../../dbConfig.js");

async function getUserByUsername(userName) {
    try{
        const [user] = await db.execute("SELECT * FROM users WHERE userName = ?", [userName])
        return user[0]
    }catch(error){console.log(error)}
}

module.exports = { getUserByUsername } //getUserByUsername