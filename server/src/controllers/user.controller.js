const { getUserByUsername } = require('../repository/user.repository')
const jwt = require('jsonwebtoken');
require("dotenv").config();

async function login(req, res){
    const {userName, password} = req.body
    const result = await getUserByUsername(userName)
    if(!result){return res.status(404).json({message: 'Tài khoản chưa được đăng kí'})}
    if(result.password != password){return res.status(400).json({message: 'Sai mật khẩu'})}
    const token = jwt.sign({id: result.id, role: result.role}, process.env.JWT_SECRET)
    res.status(200).json({message: 'Đăng nhập thành công', token})
}

module.exports = { login }