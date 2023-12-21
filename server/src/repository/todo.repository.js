const db = require("../../dbConfig");

async function addTodo(nameTodo) {
    const [result] = await db.execute("INSERT INTO lists (nameTodo) VALUES (?)", [nameTodo])
    return result
}

async function renderTodo(nameTodo) {
    const [result] = await db.execute("SELECT * FROM lists")
    return result
}

async function deleteTodo(idTodo) {
    const [result] = await db.execute("DELETE FROM lists WHERE idTodo = ?", [idTodo])
    return result
}

async function updateTodo(nameTodo, id) {
    const [result] = await db.execute("UPDATE lists SET nameTodo = ? WHERE idTodo = ?", [nameTodo, idTodo])
    return result
}

module.exports = { addTodo, renderTodo, deleteTodo, updateTodo }