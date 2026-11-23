require("dotenv").config()

const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")

const Users = require("../models/users.js")
const mongoose = require("mongoose")

function authelicate(req, res, next) {
    const authHeader = req.headers.authorization || "  "
    if (!authHeader) return res.status(401).json("Нужен токен авторизации")
    jwt.verify(authHeader, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(401).json("Недействительный токен")
        console.log(user)
        next()
    })
}

async function register (req, res) {
    const {email, password, role} = req.body

    const password_hash = bcryptjs.hashSync(password, 10)

    try {
        await Users.create({
            email: email,
            password: password_hash,
            role: role
        });

        res.json("Пользователь создан")
    }catch (err) {
        res.status(500).json("Пользователь уже существует!")
    }
}



async function checkMe(req, res){
    const authHeader = req.headers.authorization || "  "
    if (!authHeader) return res.status(401).json("Нужен токен авторизации")
    jwt.verify(authHeader, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(401).json("Недействительный токен")
        res.send(user)
    })
}


async function login (req, res) {
    const {email, password} = req.body

    const query = {email: email}

    const user = await Users.findOne(query) 
    if (!user) return res.status(401).json("Пользователь не найден")
    const ok = bcryptjs.compareSync(password, user.password)
    if (!ok) return res.status(401).json("Логин или пароль не правильный")
    const token = jwt.sign({
        email: user.email,
        role: user.role
    }, process.env.JWT_SECRET, { expiresIn: "7d" })

    res.json({
        token
    })
}

module.exports = {
    authelicate,
    register,
    login,
    checkMe
}