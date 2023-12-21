const { addListTodo, renderListTodo, removeListTodo, updateListTodo } = require('../controllers/todo.controller')
const verifyToken = require('../../middleware.js')

const todoRouter = (app) => {
    app.post('/todos', verifyToken, addListTodo)
    app.get('/todos', renderListTodo)
    app.delete('/todos/:id', verifyToken, removeListTodo)
    app.put('/todos/:id', verifyToken, updateListTodo)
}

module.exports = { todoRouter } // todoRouter