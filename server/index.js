const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser');
const { usersRouter } = require('./src/routers/user.router');
const { todoRouter } = require('./src/routers/todo.router');
require("dotenv").config();
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

usersRouter(app)
todoRouter(app)

app.listen(9999, () => console.log('hôm nay tôi nhặt được cây vàng 9999'))
