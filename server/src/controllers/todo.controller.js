const {addTodo, renderTodo, deleteTodo, updateTodo} = require('../repository/todo.repository')

async function addListTodo(req, res) {
    const {nameTodo} = req.body
    await addTodo(nameTodo)
    res.status(201).json({message: 'Thêm thành công'})
}

async function renderListTodo (req, res) {
    const result = await renderTodo()
    res.status(200).json(result)
}

async function removeListTodo(req, res) {
    const {id} = req.params
    await deleteTodo(id)
    const result = await renderTodo()
    res.status(200).json(result)
}

async function updateListTodo (req, res) {
    const {id} = req.params
    const {nameTodo} = req.body
    const result = await updateTodo(nameTodo, id)
    res.status(200).json(result)
}

module.exports = {addListTodo, renderListTodo, removeListTodo, updateListTodo}