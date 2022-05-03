
const express = require('express')
const Route = express.Router();

const {fetchDataUser} = require('../Controllers/get')
const {insertUser} = require('../Controllers/post')
const {deleteUser} = require('../Controllers/delete')

Route.get("/users",fetchDataUser)
Route.post("/regis",insertUser)
Route.delete("/delete",deleteUser)


module.exports = Route;